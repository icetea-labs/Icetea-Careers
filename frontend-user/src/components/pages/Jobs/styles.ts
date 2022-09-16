import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    jobs: {
      width: "100%",
    },
    jobsContainer: {
      maxWidth: 1120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#fff",
      "& .jobs-title": {
        font: theme.typography.nn64856.font,
        margin: "0 0 44px",
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
          font: "normal normal 600 20px/28px TTHoves",
          backgroundColor: "transparent !important",
          color: "#fff",
          margin: "0 4px",
          "&.Mui-selected": {
            color: theme.palette.primary.main,
          },
        },
      },
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

    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
