import { Button, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAdmin, updateAdmin } from "../../../requests/admin";
import { deleteJob } from "../../../requests/job";
import AdminEmail from "./Components/AdminEmail";
import AdminName from "./Components/AdminName";
import FullyPermission from "./Components/FullyPermission";
import Password from "./Components/Password";
import ConfirmPassword from "./Components/PasswordConfirm";
import Username from "./Components/Username";
import useStyles from "./styles";

export type FormData = {
  id: string | undefined;
  name?: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  isBoss: boolean;
};

export const emptyAdmin: FormData = {
  id: "",
  email: "",
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
  isBoss: false,
};

type JobFormTypes = {
  isEdit?: boolean;
  adminData?: FormData;
};

const AdminForm = (props: JobFormTypes) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { isEdit = false, adminData }: any = props;

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: adminData,
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (!adminData) return;
    reset(adminData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminData]);

  const createUpdateAdmin = async (data: any) => {
    const submitData = {
      id: data.id,
      email: data.email,
      name: data.name,
      username: data.username,
      password: data.password,
      isBoss: data.isBoss,
    };

    console.log("[createUpdateAdmin] - Submit with data: ", submitData);

    let response = {};
    if (isEdit) {
      response = await updateAdmin(submitData, adminData?.id);
    } else {
      response = await createAdmin(submitData);
    }

    return response;
  };

  const handleFormSubmit = async (data: any) => {
    // Simple validate re-password
    if (data?.password !== data?.confirmPassword) {
      toast.error("Confirmation Password do not match");
      return;
    }

    setLoading(true);
    try {
      const response: any = await createUpdateAdmin(data);
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
    } catch (error: any) {
      setLoading(false);
      console.log("ERROR: ", error);
      toast.error(error?.response?.data?.message || "Update Admin fail");
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
    const response: any = await deleteJob(adminData?.id);
    setLoading(false);
    if (response?.status === 200) {
      toast.success("Delete Admin Successful!");
      navigate(-1);
    } else {
      toast.error("Delete Admin Fail!");
    }
  };

  return (
    <div className={classes.formContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.formGrid}>
          <AdminName errors={errors} control={control} />
          <Username errors={errors} control={control} />
          <AdminEmail errors={errors} control={control} />
          <Password errors={errors} control={control} />
          <ConfirmPassword errors={errors} control={control} />

          <FullyPermission
            control={control}
            jobData={adminData}
            setValue={setValue}
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
              "Create Admin"
            )}
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default AdminForm;
