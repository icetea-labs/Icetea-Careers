import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    jobDetail: {
      width: "100%",
    },
    jobDetailHeader: {
      width: "100%",
      paddingBottom: 28,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },
    jobDetailContainer: {
      maxWidth: 1200,
      paddingTop: 60,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#fff",
      "& .jobDetail-type": {
        font: theme.typography.nn71420.font,
        padding: "8px 11px",
        background: "#12555E",
        borderRadius: 6,
      },
      "& .jobDetail-title": {
        font: theme.typography.nn63248.font,
        margin: "12px 0 20px",
      },
      "& .jobDetail-info": {
        font: theme.typography.nn61824.font,
        display: "flex",
        gap: 20,
      },
      "& .job-rank": {
        color: theme.palette.primary.main,
        minWidth: 80,
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
      gridTemplateColumns: "56px auto 420px",
      gap: 30,
      paddingTop: 32,
    },
    socials: {
      position: "sticky",
      top: 50,
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      padding: "28px 0",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      background: "rgba(255, 255, 255, 0.04)",
      borderRadius: 24,
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
      cursor:'pointer',
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
        font: "normal normal 400 16px/32px Plus Jakarta Sans",
      },
      "& .content-title": {
        font: "normal normal 700 16px/22px Plus Jakarta Sans",
        marginBottom: 8,
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
