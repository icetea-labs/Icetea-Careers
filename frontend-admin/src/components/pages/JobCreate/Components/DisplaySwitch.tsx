import { Switch } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import useStyles from "../styles";

function DisplaySwitch(props: any) {
  const classes = useStyles();
  const { control, setValue, jobData } = props;

  useEffect(() => {
    if (jobData && jobData.display !== undefined) {
      setValue("display", jobData.display);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobData]);

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Display</label>
        <Controller
          name="display"
          control={control}
          render={({ field }) => (
            <Switch
              {...field}
              name={field.name}
              checked={field.value}
              // defaultChecked={!jobData || jobData.display === undefined}
            />
          )}
        />
      </div>
    </>
  );
}

export default DisplaySwitch;
