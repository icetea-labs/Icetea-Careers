import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    homeContainer: {
      
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
