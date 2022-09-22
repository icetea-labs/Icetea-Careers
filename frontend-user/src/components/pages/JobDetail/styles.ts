import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    jobDetail: {
      width: "100%",
    },
    jobDetailHeader: {
      width: "100%",
      paddingBottom: 28,
      display: "flex",
      flexDirection: "column",
      // borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },
    jobDetailContainer: {
      maxWidth: 1440,
      padding: "60px 120px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 auto",
      color: "#fff",
      "& .jobDetail-type": {
        font: theme.typography.nn71420.font,
        padding: "8px 11px",
        background: "#413B76",
        borderRadius: 6,
        width: "fit-content",
        letterSpacing: "1px",
      },
      "& .jobDetail-title": {
        font: "normal normal 600 52px/60px TTHoves Medium",
        margin: "12px 0 40px",
        maxWidth: "50%",
      },
      "& .jobDetail-info": {
        font: theme.typography.nn61824.font,
        display: "flex",
        gap: 20,
      },
      "& .job-level": {
        color: theme.palette.primary.main,
        display: "flex",
        gap: 4,
        "&-item": {
          font: theme.typography.nn61824.font,
          letterSpacing: "1px",
          textTransform: "capitalize",
          transition: "all 0.3s",
        },
      },
      "& .job-location": {
        display: "flex",
        alignItems: "center",
        "& img": {
          height: 18,
          marginRight: 6,
        },
      },
    },
    jobDetailBody: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "56px auto",
      gap: 30,
      paddingTop: 28,
    },
    jobDetailWrap: {
      display: "flex",
      flexDirection: "column",
      gap: 80,
    },
    groupJobDetail: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "auto 420px",
      gap: 30,
    },
    socials: {
      position: "sticky",
      top: 50,
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 30,
      padding: "28px 0",
      background: "#151515",
      borderRadius: 60,
    },
    socialItem: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
      cursor: "pointer",
      "& img": {
        width: 20,
        height: 20,
      },
      "&:hover": {
        transition: "0.5s all",
      },
    },
    jobContent: {
      "& .content-group": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: 32,
        font: "normal normal 400 16px/32px TTHoves",
      },
      "& .content-title": {
        font: "normal normal 700 16px/22px TTHoves",
        marginBottom: 8,
      },
    },
    jobsOther: {
      "& .other-title": {
        textAlign: "center",
        font: "normal normal 700 36px/60px TTHoves",
      },
      "& .other-container": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
      },
    },
    otherCard: {
      background: "rgba(255, 255, 255, 0.04)",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      borderRadius: 24,
      padding: "36px 40px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      transition: "0.25s",
      "& p": {
        margin: 0,
      },
      "& .job-title": {
        font: theme.typography.nn62028.font,
        margin: 0,
        padding: 0,
        height: "min-content",
      },
      "& .job-info": {
        display: "flex",
        alignItems: "center",
        font: theme.typography.nn71420.font,
      },
      "& .group-info": {
        gap: 20,
        display: "flex",
        alignItems: "center",
        marginRight: "auto",
      },
      "& .job-rank": {
        color: theme.palette.primary.main,
      },
      "& .job-location": {
        display: "flex",
        alignItems: "center",
        gap: 4,
      },
      "&:hover": {
        background: "rgba(0, 199, 244, 0.1)",
        border: "2px solid rgba(0, 199, 244, 0.36)",
      },
    },

    [theme.breakpoints.down("lg")]: {
      jobDetailContainer: {
        padding: "40px 60px",
      },
      groupJobDetail: {
        gridTemplateColumns: "1fr",
        gap: 8,
      },
      jobsOther: {
        "& .other-container": {
          gridTemplateColumns: "1fr",
          gap: 8,
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      jobDetailContainer: {
        padding: "40px 30px",
      },
    },

    [theme.breakpoints.only("xs")]: {
      jobDetailHeader: {
        margin: "0 20px",
        width: "auto",
        "& .jobDetail-title": {
          font: "normal normal 600 28px/36px TTHoves",
        },
        "& .jobDetail-info": {
          font: theme.typography.nn71420.font,
        },
      },
      jobDetailBody: {
        gridTemplateColumns: "1fr",
        gap: 0,
      },
      jobDetailContainer: {
        padding: 20,
        paddingBottom: 60,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      },
      jobDetailWrap: {
        gap: 40,
      },
      jobContent: {
        padding: 20,
      },
      socials: {
        position: "unset",
        flexDirection: "row",
        margin: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 50px",
      },
      jobsOther: {
        "& .other-title": {
          margin: "0 0 8px",
          font: theme.typography.nn62028.font,
        },
      },
      otherCard: {
        padding: "28px 20px 8px",
        gap: 12,
        "& .job-title": {
          textAlign: "center",
        },
        "& .job-info": {
          flexDirection: "column",
        },
        "& .group-info": {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginRight: 0,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingBottom: 20,
          marginBottom: 8,
        },
      },
    },
  };
});

export default useStyles;
