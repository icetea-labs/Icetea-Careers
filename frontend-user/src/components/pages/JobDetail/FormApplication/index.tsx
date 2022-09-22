import { CircularProgress } from "@mui/material";
import axios from "axios";
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useStyles from "./styles";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

type FormDataTypes = {
  name: string;
  phone: string;
  email: string;
  cv: any;
  coverLetter: string;
  linkedin?: string;
  facebook?: string;
  jobTitle?: string;
};

type FormApplicationTypes = {
  jobTitle: string | undefined;
  handleApply: () => void;
};

const FormApplication = (props: FormApplicationTypes) => {
  const styles = useStyles();
  const { handleApply, jobTitle = "" } = props;
  const [cvFile, setCvFile] = useState<any>();
  const [user, setUser] = useState<any>(null);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormDataTypes>({
    mode: "onChange",
  });

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
        scope: "",
        // scope: "https://www.googleapis.com/auth/gmail.send",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onGoogleLoginSuccess = (response: any) => {
    console.log(response);
    setUser(response?.profileObj);
  };

  const onGoogleLoginFailure = (res: any) => {
    toast.error("Error signing in to your Google account!");
    console.log("ERROR login: ", res);
  };

  const handleSelectCV = (e: any) => {
    const targetFile = e.target.files[0];
    setCvFile(targetFile);
    setValue("cv", targetFile?.name);
    clearErrors("cv");
  };

  const getFormData = (object: any) =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key]);
      return formData;
    }, new FormData());

  const onSubmit = async (data: FormDataTypes) => {
    if (data.email !== user?.email) {
      toast.error("Your email address you entered does not match your account");
      return;
    }

    let newData = getFormData(data);
    newData.delete("cv");
    newData.append("cv", cvFile);
    newData.append("jobTitle", jobTitle);

    if (data.coverLetter?.length > 500)
      return toast.error("Cover letter maximum length is 500 characters", {
        theme: "dark",
      });

    try {
      setLoadingSubmit(true);
      const res = await axios({
        method: "post",
        url: `${API_BASE_URL}jobs/apply`,
        data: newData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoadingSubmit(false);

      if (res?.data?.success) {
        toast.success(
          res.data.message || "Your mail has been sent successfuly"
        );
      }
    } catch (error: any) {
      setLoadingSubmit(false);
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }

    handleApply();
  };

  const renderError = () => {
    return <span className="input-error">Field is required</span>;
  };
  const renderIconError = () => {
    return (
      <img src="/images/icon-invalid.svg" className="input-error-icon" alt="" />
    );
  };

  return (
    <div className={styles.jobFormWrap}>
      <p className="form-title">Job Application</p>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.groupName}>
          <div className={styles.formInput}>
            <div
              className={`input-field ${errors.name ? "input-disabled" : ""}`}
            >
              <input
                placeholder="Your name"
                {...register("name", { required: true })}
              />
              {renderIconError()}
            </div>
            {errors.name && renderError()}
          </div>

          <div className={styles.formInput}>
            <div
              className={`input-field ${errors.phone ? "input-disabled" : ""}`}
            >
              <input
                placeholder="Your phone number"
                {...register("phone", { required: true })}
              />
              {renderIconError()}
            </div>
            {errors.phone && renderError()}
          </div>
        </div>

        <div className={styles.formInput}>
          <div
            className={`input-field ${errors.email ? "input-disabled" : ""}`}
          >
            <input
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {renderIconError()}
          </div>
          {errors.email && renderError()}
        </div>

        <div className={styles.formInput}>
          <div
            className={`input-field ${styles.uploadInput} ${
              errors.cv ? "input-disabled" : ""
            }`}
          >
            <input
              type={"text"}
              className="cv-label"
              disabled
              placeholder="Upload your CV"
              {...register("cv", { required: true })}
            />
            {renderIconError()}
            <label>
              Upload
              <input
                type="file"
                hidden
                accept=".pdf, .ppt, .pptx, .doc, .docx, .jpg, .png"
                onChange={handleSelectCV}
              />
            </label>
          </div>
          {errors.cv && renderError()}
          <p className={styles.cvNote}>
            (PDF, PPT, PPTX, DOC, DOCX, JPG, PNG - Max size: 5 MB)
          </p>
        </div>

        <div className={styles.formInput}>
          <div
            className={`input-field ${
              errors.coverLetter ? "input-disabled" : ""
            }`}
          >
            <textarea
              rows={4}
              placeholder="Cover letter (maximum 500 characters)"
              {...register("coverLetter", { required: true })}
            />
            {renderIconError()}
          </div>
          {errors.coverLetter && renderError()}
        </div>

        <div className={styles.groupInput}>
          <div className={styles.formInput}>
            <div className="input-field">
              <input
                placeholder="LinkedIn (Optional)"
                {...register("linkedin")}
              />
            </div>
          </div>
          <div className={styles.formInput}>
            <div className="input-field">
              <input
                placeholder="Facebook (Optional)"
                {...register("facebook")}
              />
            </div>
          </div>
        </div>

        <div className={styles.groupBtn}>
          {user ? (
            <button
              type="submit"
              className={styles.btnApply}
              disabled={!user || loadingSubmit}
            >
              Apply this job
              {loadingSubmit && (
                <CircularProgress
                  size={25}
                  style={{ marginLeft: 10 }}
                  color="inherit"
                />
              )}
            </button>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
              buttonText="Log in with Google"
              onSuccess={onGoogleLoginSuccess}
              onFailure={onGoogleLoginFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={false}
                  className={styles.btnApply + " " + styles.btnLogin}
                >
                  <img src="/images/icon-google-plus.svg" alt="" />
                  Log in with Google
                </button>
              )}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormApplication;
