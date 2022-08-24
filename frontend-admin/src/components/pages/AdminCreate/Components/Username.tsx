import { OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function Username(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Username</label>
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <OutlinedInput {...field} />}
        />

        {errors.username && <RequiredError />}
      </div>
    </>
  );
}

export default Username;
