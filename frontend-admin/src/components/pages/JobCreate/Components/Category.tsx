import { MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { categories } from "../../../../constants";
import RequiredError from "../../../base/RequiredError";
import useStyles from "../styles";

function Category(props: any) {
  const classes = useStyles();
  const { errors, control } = props;

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Category</label>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              name="category"
              placeholder="Select"
              inputProps={{ "aria-label": "Without label" }}
            >
              {categories.map((category: any, index: number) => {
                return (
                  <MenuItem value={category.value} key={index}>
                    {category.label}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        />

        {errors.category && <RequiredError />}
      </div>
    </>
  );
}

export default Category;
