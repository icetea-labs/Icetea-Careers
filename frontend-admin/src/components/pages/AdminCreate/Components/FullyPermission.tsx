import { Switch } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import useStyles from "../styles";

function FullyPermission(props: any) {
  const classes = useStyles();
  const { control, setValue, jobData } = props;

  useEffect(() => {
    if (jobData && jobData.isBoss !== undefined) {
      setValue("isBoss", jobData.isBoss);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobData]);

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Full Permissions</label>
        <Controller
          name="isBoss"
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

export default FullyPermission;
