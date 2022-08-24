import { OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function ConfirmPassword(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Password</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <OutlinedInput {...field} type="password" />}
        />

        {errors.confirmPassword && <RequiredError />}
      </div>
    </>
  );
}

export default ConfirmPassword;
