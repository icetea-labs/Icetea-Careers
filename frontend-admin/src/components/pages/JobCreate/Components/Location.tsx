import { MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { locations } from "../../../../constants";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function Location(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Location</label>
        <Controller
          name="location"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              name="location"
              placeholder="Select"
              inputProps={{ "aria-label": "Without label" }}
            >
              {locations.map((location: any, index: number) => {
                return (
                  <MenuItem value={location.value} key={index}>
                    {location.label}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />

        {errors.location && <RequiredError />}
      </div>
    </>
  );
}

export default Location;
