import { Button, CircularProgress, Grid } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createJob, deleteJob, updateJob } from "../../../requests/job";
import Benefits from "./Components/Benefits";
import Category from "./Components/Category";
import Description from "./Components/Description";
import DisplaySwitch from "./Components/DisplaySwitch";
import JobLevel from "./Components/JobLevel";
import JobTitle from "./Components/JobTitle";
import Location from "./Components/Location";
import Requirements from "./Components/Requirements";
import useStyles from "./styles";

export type FormData = {
  id: number;
  display: boolean;
  title: string;
  category: string;
  level: string;
  location: string;
  description: string;
  requirements: string;
  benefits: string;
};

export const emptyJobDetail: FormData = {
  id: 0,
  display: true,
  benefits: "",
  category: "",
  description: "",
  level: "",
  location: "",
  requirements: "",
  title: "",
};

type JobFormTypes = {
  isEdit?: boolean;
  jobData?: FormData;
};

const JobForm = (props: JobFormTypes) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { isEdit = false, jobData }: any = props;

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: useMemo(() => {
      return jobData;
    }, [jobData]),
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (!jobData) return;
    reset(jobData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobData]);

  const createUpdateJob = async (data: any) => {
    const submitData = {
      id: data.id || 0,
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
    } catch (e: any) {
      setLoading(false);
      toast.error(e?.response?.data?.message || "Something wrong");
      console.log("ERROR: ", e);
    }
  };

  const handleJobCreateUpdate = () => {
    setTimeout(() => {
      handleSubmit(handleFormSubmit)();
    }, 100);
  };

  const handleJobCancelOrDelete = async () => {
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
            <DisplaySwitch
              control={control}
              jobData={jobData}
              setValue={setValue}
            />
          </Grid>
          <Grid item xs={12} className={classes.formFieldGroup}>
            <JobTitle errors={errors} control={control} />
            <Category errors={errors} control={control} />
          </Grid>

          <Grid item xs={12} className={classes.formFieldGroup}>
            <JobLevel errors={errors} control={control} />
            <Location errors={errors} control={control} />
          </Grid>

          {(jobData?.description || !isEdit) && (
            <Description
              jobData={jobData}
              register={register}
              setValue={setValue}
              errors={errors}
              control={control}
            />
          )}
          {(jobData?.requirements || !isEdit) && (
            <Requirements
              jobData={jobData}
              register={register}
              setValue={setValue}
              errors={errors}
              control={control}
            />
          )}
          {(jobData?.benefits || !isEdit) && (
            <Benefits
              jobData={jobData}
              register={register}
              setValue={setValue}
              errors={errors}
              control={control}
            />
          )}
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
