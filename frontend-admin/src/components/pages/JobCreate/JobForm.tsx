import { Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createJob, deleteJob, updateJob } from "../../../requests/job";
import Benefits from "./Components/Benefits";
import Category from "./Components/Category";
import Description from "./Components/Description";
import JobLevel from "./Components/JobLevel";
import JobTitle from "./Components/JobTitle";
import Location from "./Components/Location";
import Requirements from "./Components/Requirements";
import useStyles from "./styles";

export type FormData = {
  title: string;
  category: string;
  level: string;
  location: string;
  description: string;
  requirements: string;
  benefits: string;
};

export const emptyJobDetail: FormData = {
  benefits: "",
  category: "marketing",
  description: "<p>defaul value</p>",
  level: "junior",
  location: "remote",
  requirements: "",
  title: "React Native Dev",
};

type JobFormTypes = {
  isEdit?: boolean;
  jobData?: FormData;
};

const JobForm = (props: JobFormTypes) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { isEdit = false, jobData = { ...emptyJobDetail } }: any = props;

  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: jobData,
    reValidateMode: "onChange",
  });

  const createUpdateJob = async (data: any) => {
    const submitData = {
      display: data.display,
      title: data.title,
      category: data.category,
      level: data.level,
      location: data.location,
      description: data.description,
      requirements: data.requirements,
      benefits: data.benefits,
    };

    console.log("[createUpdateJob] - Submit with data: ", submitData);

    let response = {};
    if (isEdit) {
      response = await updateJob(submitData, jobData?.id);
    } else {
      response = await createJob(submitData);
    }

    return response;
  };

  const handleFormSubmit = async (data: any) => {
    console.log("handleFormSubmit", data);
    setLoading(true);
    try {
      const response: any = await createUpdateJob(data);
      setLoading(false);
      if (response?.status === 200) {
        toast.success("Successful!");
        if (isEdit) {
          // window.location.reload();
        } else {
          navigate(-1);
        }
      } else {
        toast.error("Fail!");
      }
    } catch (e) {
      setLoading(false);
      console.log("ERROR: ", e);
    }
  };

  const handleJobCreateUpdate = () => {
    setTimeout(() => {
      handleSubmit(handleFormSubmit)();
    }, 100);
  };

  const handleJobCancelOrDelete = async () => {
    console.log("cancle delete");
    if (!isEdit) return navigate(-1);

    // delete
    setLoading(true);
    const response: any = await deleteJob(jobData?.id);
    setLoading(false);
    if (response?.status === 200) {
      toast.success("Delete JD Successful!");
      navigate(-1);
    } else {
      toast.error("Delete JD Fail!");
    }
  };

  return (
    <div className={classes.formContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.formGrid}>
          <Grid item xs={12} className={classes.formFieldGroup}>
            <JobTitle errors={errors} control={control} />
            <Category errors={errors} control={control} />
          </Grid>

          <Grid item xs={12} className={classes.formFieldGroup}>
            <JobLevel errors={errors} control={control} />
            <Location errors={errors} control={control} />
          </Grid>

          <Description
            jobData={jobData}
            register={register}
            setValue={setValue}
            errors={errors}
            control={control}
          />
          <Requirements
            jobData={jobData}
            register={register}
            setValue={setValue}
            errors={errors}
            control={control}
          />
          <Benefits
            jobData={jobData}
            register={register}
            setValue={setValue}
            errors={errors}
            control={control}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <div className={classes.groupButton}>
          <Button
            variant="contained"
            color="error"
            disabled={loading}
            onClick={handleJobCancelOrDelete}
          >
            {loading ? (
              <CircularProgress size={25} />
            ) : isEdit ? (
              "Delete"
            ) : (
              "Cancel"
            )}
          </Button>
          <Button
            variant="contained"
            // disabled={loading}
            onClick={handleJobCreateUpdate}
          >
            {loading ? (
              <CircularProgress size={25} />
            ) : isEdit ? (
              "Update"
            ) : (
              "Create JD"
            )}
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default JobForm;
