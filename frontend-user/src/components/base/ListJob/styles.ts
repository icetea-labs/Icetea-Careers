import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  // const itemMaxLength = "calc((100% - 40px) / 3)";

  return {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
    },
    jobsNav: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: 20,
      boxSizing: "border-box",
      padding: "0 44px",
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
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 20,
      boxSizing: "border-box",
    },
    jobCard: {
      maxWidth: 360,
      minHeight: 216,
      color: "#fff",
      background: "#000",
      borderRadius: 24,
      boxSizing: "border-box",
      padding: "40px 40px 12px",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.3s",

      "&:hover": {
        background: theme.palette.primary.main,
        boxShadow: "0px 4px 250px rgba(0, 199, 244, 0.32)",
        color: "#000",
        "& .btn-view-more": {
          visibility: "visible",
        },
        "& .job-level-item": {
          background: "#000",
          color: "#fff",
        },
        "& .job-location": {
          background:
            "url(/images/icon-location-black.svg) no-repeat left center",
        },
      },
      "& .job-level": {
        marginTop: 12,
        display: "flex",
        gap: 4,
        "&-item": {
          borderRadius: 20,
          background: "#005164",
          padding: "4px 10px",
          font: "normal normal 600 12px/16px TTHoves",
          letterSpacing: "1px",
          textTransform: "capitalize",
          transition: "all 0.3s",
        },
      },
      "& .job-title": {
        font: "normal normal 600 28px/36px TTHoves",
        margin: 0,
        minHeight: 72,
      },
      "& .job-info": {
        display: "flex",
        font: theme.typography.nn71420.font,
      },
      "& .job-location": {
        transition: "background 0.3s",
        display: "flex",
        alignItems: "center",
        font: theme.typography.nn71420.font,
        paddingLeft: 20,
        background: "url(/images/icon-location.svg) no-repeat left center",
      },
      "& .btn-view-more": {
        display: "flex",
        visibility: "hidden",
        textDecoration: "none",
        color: "inherit",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 18px",
        font: theme.typography.nn71420.font,
        background: "#fff",
        borderRadius: 60,
        gap: 4,
        transition: "letter-spacing 0.5s",
        "&:hover": {
          letterSpacing: "1px",
        },
      },
    },
    cardBottom: {
      marginTop: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    listEmpty: {
      textAlign: "center",
    },

    [theme.breakpoints.down("lg")]: {
      jobsNav: {
        padding: "0 32px",
      },
      jobCard: {
        padding: "32px 24px 12px",
        "& .job-title": {
          fontSize: 24,
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      jobsNav: {
        padding: 0,
        "& .nav-item": {
          minWidth: "unset",
        },
      },
      jobsList: {
        gridTemplateColumns: "1fr 1fr",
      },
    },

    [theme.breakpoints.only("xs")]: {
      container: {
        padding: 0,
      },
      jobsList: {
        padding: 20,
        margin: 0,
        gridTemplateColumns: "1fr",
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
        maxWidth: "100%",
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
      btnViewMore: {
        marginTop: 8,
      },
    },
  };
});

export default useStyles;
