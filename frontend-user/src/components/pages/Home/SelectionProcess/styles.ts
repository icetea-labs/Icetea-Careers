import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    process: {
      width: "100%",
      paddingTop: 160,
    },
    processContainer: {
      maxWidth: 1040,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#fff",
      "& .process-title": {
        font: theme.typography.nn64856.font,
        margin: "0 0 80px",
      },
      "& img": {
        maxWidth: "100%",
      },
    },
    [theme.breakpoints.down("lg")]: {
      processContainer: {
        padding: "0 40px",
        "& .process-title": {
          fontSize: 40,
        },
      },
    },
    [theme.breakpoints.only("xs")]: {
      forewordContainer: {
        maxWidth: "100%",
        padding: 0,
      },
    },
  };
});

export default useStyles;
