import { OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function JobTitle(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Job Title</label>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <OutlinedInput {...field} />}
        />

        {errors.title && <RequiredError />}
      </div>
    </>
  );
}

export default JobTitle;
