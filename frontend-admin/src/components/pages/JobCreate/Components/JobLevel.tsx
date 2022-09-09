import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { levels } from "../../../../constants";
import useStyles from "../styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, levels: readonly string[], theme: Theme) {
  return {
    fontWeight:
      levels?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function JobLevel(props: any) {
  const theme = useTheme();
  const classes = useStyles();
  const { control, setValue, jobData } = props;
  const [levelSelected, setLevelSelected] = useState<string[]>([]);

  useEffect(() => {
    if (jobData?.level) {
      setLevelSelected(jobData?.level?.split(";"));
    }
  }, [jobData]);

  const handleChange = (event: SelectChangeEvent<typeof levelSelected>) => {
    const {
      target: { value },
    } = event;

    // On autofill we get a stringified value.
    let levelName = typeof value === "string" ? value.split(",") : value;

    setLevelSelected(levelName);

    let levelValue = "";
    if (value && value.length !== 0 && !value.includes("")) {
      levelValue = typeof value === "string" ? value : value.join(";");
    }
    setValue("level", levelValue);
  };

  return (
    <>
      <div className={classes.formControl}>
        <label className={classes.formControlLabel}>Job Level</label>
        <Controller
          name="level"
          control={control}
          rules={{}}
          render={({ field }) => (
            <Select
              {...field}
              multiple
              value={levelSelected}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {levels.map((level: any) => (
                <MenuItem
                  key={level.value}
                  value={level.value}
                  style={getStyles(level.label, levelSelected, theme)}
                >
                  {level.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        {/* {errors.level && <RequiredError />} */}
      </div>
    </>
  );
}

export default JobLevel;
