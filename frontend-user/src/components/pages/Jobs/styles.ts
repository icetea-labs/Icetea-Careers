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
        margin: "0 0 20px",
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
    searchBar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: 460,
      background: theme.palette.primary.main,
      borderRadius: 60,
      height: 60,
      padding: 6,
      marginBottom: 32,
      boxSizing: "border-box",
      font: theme.typography.nn41424.font,
      color: "#000",

      "& .search-field": {
        flex: 1,
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: 60,
        padding: "12px 16px",
        "& img": {
          marginRight: 12,
          width: 24,
        },
        "& input": {
          height: "100%",
          padding: 0,
          border: "none",
          outline: "none",
          flex: 1,
        },
      },
      "& .search-btn": {
        padding: "0 20px",
        color: "#000",
        fontWeight: 700,
        "&:hover": {
          cursor: "pointer",
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
