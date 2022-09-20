import axios from "../../../../services/axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useStyles from "./styles";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

type FormData = {
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
  const { handleApply, jobTitle } = props;
  const [cvFile, setCvFile] = useState<any>();
  const [user, setUser] = useState<any>(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  useEffect(() => {
    if (!google) return;
    // Google Service
    google.accounts.id.initialize({
      client_id:
        "339095532990-oepeujq7og5ki7s5n5av3rpm20bff1p4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    let signInDiv: any = document.getElementById("signInDiv");
    google.accounts.id.renderButton(signInDiv, {
      type: "standard",
      theme: "filled_black",
      size: "large",
      width: "100%",
    });
    // google.accounts.id.prompt();
  }, []);

  const handleCallbackResponse = (res: any) => {
    let userObject = jwtDecode(res?.credential);
    console.log(res, userObject);
    setUser(userObject);
  };

  const handleSelectCV = (e: any) => {
    console.log(e.target.files[0]);
    setCvFile(e.target.files[0]);
    setValue("cv", e.target.files[0].name);
    clearErrors("cv");
  };

  const onSubmit = async (data: FormData) => {
    if (data.email !== user?.email) {
      toast.error("Your email address you entered does not match your account");
      return;
    }

    const newData = {
      ...data,
      cv: cvFile,
      jobTitle: jobTitle,
    };
    console.log("SUBMIT data:", newData);
    // if (data.coverLetter?.length > 500)
    //   return toast.error("Cover letter maximum length is 500 characters", {
    //     theme: "dark",
    //   });

    try {
      const res = await axios.post("/jobs/apply", newData);

      console.log(res);
    } catch (error: any) {
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
          <button type="submit" className={styles.btnApply} disabled={!user}>
            Apply this job
          </button>

          {!user && <div id="signInDiv" className={styles.signInGoogle}></div>}
        </div>
      </form>
    </div>
  );
};

export default FormApplication;
