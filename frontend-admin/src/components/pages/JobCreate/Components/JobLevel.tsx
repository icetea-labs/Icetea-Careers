import { MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { levels } from "../../../../constants";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function JobLevel(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Job Level</label>
        <Controller
          name="level"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              name="level"
              placeholder="Select"
              inputProps={{ "aria-label": "Without label" }}
            >
              {levels.map((level: any, index: number) => {
                return (
                  <MenuItem value={level.value} key={index}>
                    {level.label}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />

        {errors.level && <RequiredError />}
      </div>
    </>
  );
}

export default JobLevel;
