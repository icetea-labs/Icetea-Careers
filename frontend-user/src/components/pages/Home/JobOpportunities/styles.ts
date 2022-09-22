import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    jobs: {
      width: "100%",
      paddingTop: 60,
    },
    jobsContainer: {
      maxWidth: "min(1120px, 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#fff",
      "& .jobs-title": {
        font: theme.typography.nn64856.font,
        margin: "0 0 32px",
        textAlign: "center",
      },
    },
    btnViewAll: {
      marginTop: 28,
    },

    [theme.breakpoints.down("lg")]: {
      jobsContainer: {
        maxWidth: "100%",
        padding: "0 60px",
        "& .jobs-title": {
          fontSize: 40,
        },
      },
      jobsNav: {
        padding: "0 32px",
      },
    },
    [theme.breakpoints.down("md")]: {
      jobsContainer: {
        padding: "0 32px",
      },
    },
    [theme.breakpoints.only("xs")]: {
      jobsContainer: {
        maxWidth: "100%",
        padding: 0,
        "& .jobs-title": {
        font: theme.typography.nn62836.font,
          margin: "0 0 32px",
          textAlign: "center",
        },
      },
      btnViewAll: {
        marginTop: 8,
      },
    },
  };
});

export default useStyles;
