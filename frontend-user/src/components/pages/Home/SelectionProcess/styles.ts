import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    process: {
      width: "100%",
      marginTop: 120,
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
        font: theme.typography.nn63248.font,
        margin: "0 0 40px",
      },
      "& img": {
        maxWidth: "100%",
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
