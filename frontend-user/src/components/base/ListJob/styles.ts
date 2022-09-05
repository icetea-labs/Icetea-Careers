import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0 60px",
      boxSizing: "border-box",
    },
    jobsNav: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
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
    jobSkeleton: {
      marginTop: 24,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      // padding: "0 60px",
      boxSizing: "border-box",
    },
    skeletonItem: {
      height: 124,
      color: "#fff",
      background: "rgba(255, 255, 255, 0.04)",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      borderRadius: 20,
      padding: "32px 40px 20px",
      display: "flex",
      justifyContent: "space-between",
      boxSizing: "border-box",
    },
    boxSkeletonLeft: {
      width: "100%",
      maxWidth: 360,
      display: "flex",
      flexDirection: "column",
    },
    jobsList: {
      marginTop: 24,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      boxSizing: "border-box",
    },
    jobCard: {
      color: "#fff",
      background: "rgba(255, 255, 255, 0.04)",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      borderRadius: 20,
      padding: "32px 40px 20px",
      display: "flex",
      justifyContent: "space-between",
      transition: "0.25s",
      "&:hover": {
        background: "rgba(0, 199, 244, 0.1)",
        border: "2px solid rgba(0, 199, 244, 0.36)",
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
    listEmpty: {
      textAlign: "center",
    },

    [theme.breakpoints.down("lg")]: {
      jobsNav: {
        padding: 0,
      },
    },
    [theme.breakpoints.down("md")]: {
      jobsNav: {
        "& .nav-item": {
          minWidth: "unset",
        },
      },
    },

    [theme.breakpoints.only("xs")]: {
      container: {
        padding: 0,
      },
      jobsList: {
        padding: 20,
        margin: 0,
      },
      jobsNav: {
        overflowX: "auto",
        whiteSpace: "nowrap",
        gap: 0,
        "& .nav-item": {
          padding: "0 12px 20px",
        },
      },
      jobCard: {
        flexDirection: "column",
        justifyContent: "normal",
        padding: "28px 20px 8px",
      },
      jobDetail: {
        alignItems: "center",
        paddingBottom: 20,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        "& .job-title": {
          textAlign: "center",
        },
      },
      btnViewMoreMobile: {
        marginTop: 8,
      },
    },
  };
});

export default useStyles;
