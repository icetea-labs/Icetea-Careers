import { OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function AdminEmail(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Admin Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <OutlinedInput {...field} />}
        />

        {errors.email && <RequiredError />}
      </div>
    </>
  );
}

export default AdminEmail;
