import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    jobsNav: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: 20,
      boxSizing: "border-box",
      padding: "0 44px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      "& .nav-item": {
        font: theme.typography.nn61824.font,
        color: "rgba(255, 255, 255, 0.6)",
        textAlign: "center",
        minWidth: 160,
        paddingBottom: 20,
        "&.nav-actived": {
          color: theme.palette.primary.main,
          background: "url(/images/bg-nav-actived.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        },
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    jobsList: {
      marginTop: 24,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    jobCard: {
      // height: 120,
      color: "#fff",
      background: "rgba(255, 255, 255, 0.04)",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      borderRadius: 20,
      padding: "32px 40px 20px",
      display: "flex",
      justifyContent: "space-between",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.06)",
        border: "2px solid",
        borderImageSource:
          "linear-gradient(141.27deg, rgba(0, 199, 244, 0.18) 0.83%, rgba(255, 255, 255, 0.12) 50.46%, rgba(0, 199, 244, 0.36) 98.05%)",
      },
    },
    jobDetail: {
      display: "flex",
      flexDirection: "column",
      "& .job-title": {
        font: theme.typography.nn62028.font,
        margin: 0,
      },
      "& .job-info": {
        marginTop: 20,
        gap: 12,
        display: "flex",
        font: theme.typography.nn71420.font,
      },
      "& .job-rank": {
        color: theme.palette.primary.main,
        minWidth: 80,
      },
      "& .job-location": {
        display: "flex",
        alignItems: "center",
        "& img": {
          height: 12,
          marginRight: 6,
        },
      },
    },

    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
