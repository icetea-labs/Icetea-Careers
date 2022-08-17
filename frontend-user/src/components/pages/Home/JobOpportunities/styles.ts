import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    jobs: {
      width: "100%",
    },
    jobsContainer: {
      maxWidth: "min(1080px, 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#fff",
      "& .jobs-title": {
        font: theme.typography.nn63248.font,
        margin: "0 0 32px",
      },
    },
    btnViewAll: {
      marginTop: 28,
    },

    [theme.breakpoints.only("xs")]: {
      forewordContainer: {
        maxWidth: "100%",
        padding: 0,
      },
      btnViewAll: {
        marginTop: 8,
      },
    },
  };
});

export default useStyles;
