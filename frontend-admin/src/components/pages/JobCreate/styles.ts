import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    jobCreateContainer: {
      
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;