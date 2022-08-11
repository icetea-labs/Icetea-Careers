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
    pagination: {
      display: "flex",
      justifyContent: "center",
      marginTop: 32,
      "& *": {
        color: "white",
      },
      "& li": {
        "& .pagination-item": {
          font: "normal normal 600 20px/28px Plus Jakarta Sans",
          backgroundColor: "transparent !important",
          color: "#fff",
          margin: "0 4px",
          "&.Mui-selected": {
            color: theme.palette.primary.main,
          },
        },
      },
    },

    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
