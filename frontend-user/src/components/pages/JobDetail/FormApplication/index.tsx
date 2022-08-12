import { useForm } from "react-hook-form";
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

const FormApplication = (props: any) => {
  const styles = useStyles();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const handleSelectCV = (e: any) => {
    console.log(e.target.files[0]);
    setValue("cv", e.target.files[0].name);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.jobFormWrap}>
      <p className="form-title">Job Application</p>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInput}>
          <input
            placeholder="Your name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name && <span className="error">!</span>}
        </div>

        <div className={styles.formInput}>
          <input
            placeholder="Your phone number"
            {...register("phone", { required: true, maxLength: 20 })}
          />
          {errors.phone && <span className="error">!</span>}
        </div>

        <div className={styles.formInput}>
          <input
            placeholder="Enter your email"
            {...register("email", { required: true, maxLength: 20 })}
          />
          {errors.email && <span className="error">!</span>}
        </div>

        <div className={styles.formInput + " " + styles.uploadInput}>
          <input
            type={"text"}
            className="cv-label"
            disabled
            placeholder="Upload your CV"
            {...register("cv", { required: true })}
          />
          {errors.cv && <span className="error">!</span>}
          <label>
            Upload
            <input
              type="file"
              hidden
              accept=".pdf, .ppt, .pptx, .doc, .docx, .jpg, .png"
              // {...register("cv", { required: true })}
              onChange={handleSelectCV}
            />
          </label>
        </div>
        <p className={styles.cvNote}>
          (PDF, PPT, PPTX, DOC, DOCX, JPG, PNG - Max size: 5 MB)
        </p>

        <div className={styles.formInput}>
          <textarea
            rows={4}
            placeholder="Cover letter (maximum 500 characters)"
            {...register("coverLetter", { required: true, maxLength: 500 })}
          />
          {errors.coverLetter && <span className="error">!</span>}
        </div>

        <div className={styles.groupInput}>
          <div className={styles.formInput}>
            <input
              placeholder="LinkedIn (Optional)"
              {...register("linkedin", { maxLength: 20 })}
            />
            {errors.linkedin && <span className="error">!</span>}
          </div>
          <div className={styles.formInput}>
            <input
              placeholder="Facebook (Optional)"
              {...register("facebook", { maxLength: 20 })}
            />
            {errors.facebook && <span className="error">!</span>}
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
