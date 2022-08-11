import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    jobs: {
      width: "100%",
    },
    jobsContainer: {
      maxWidth: 960,
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
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
