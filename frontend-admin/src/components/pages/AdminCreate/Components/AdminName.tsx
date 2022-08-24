import { OutlinedInput } from "@mui/material";
import { Controller } from "react-hook-form";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function AdminName(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Admin Name</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <OutlinedInput {...field} />}
        />

        {errors.name && <RequiredError />}
      </div>
    </>
  );
}

export default AdminName;
