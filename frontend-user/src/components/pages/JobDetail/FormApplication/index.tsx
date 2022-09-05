import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useStyles from "./styles";

type FormData = {
  name: string;
  phone: string;
  email: string;
  cv: any;
  coverLetter: string;
  linkedin?: string;
  facebook?: string;
};

type FormApplicationTypes = {
  handleApply: () => void;
};

const FormApplication = (props: FormApplicationTypes) => {
  const styles = useStyles();
  const { handleApply } = props;

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const handleSelectCV = (e: any) => {
    // console.log(e.target.files[0]);
    setValue("cv", e.target.files[0].name);
    clearErrors("cv");
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (data.coverLetter?.length > 500)
      return toast.error("Cover letter maximum length is 500 characters", {
        theme: "dark",
      });
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

        {/* <div className={styles.listBtn}>
          <Button type="submit" className={styles.btnSubmit}>
            Submit
          </Button>
        </div> */}
        <button type="submit" className={styles.btnApply}>
          Apply this job
        </button>
      </form>
    </div>
  );
};

export default FormApplication;
