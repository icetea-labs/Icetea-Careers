import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    notFoundLayout: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "url(/images/bg-not-found.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: "hidden",
    },
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 80,
      boxSizing: "border-box",
      "& p": {
        margin: 0,
        textAlign: "center",
        color: "#fff",
      },
      "& .title": {
        font: "normal normal 600 160px/160px Plus Jakarta Sans",
      },
      "& .sub-title": {
        font: "normal normal 600 48px/60px Plus Jakarta Sans",
        margin: "28px 0 4px",
      },
      "& .detail": {
        font: "normal normal 600 16px/32px Plus Jakarta Sans",
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
    [theme.breakpoints.only("xs")]: {
      notFoundLayout: {
        background: "url(/images/bg-not-found-mobile.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },

      container: {
        padding: "0 40px",
        "& .title": {
          font: "normal normal 600 100px/120px Plus Jakarta Sans",
        },
        "& .sub-title": {
          font: "normal normal 600 36px/44px Plus Jakarta Sans",
          margin: "28px 0 4px",
        },
        "& .detail": {},
      },
    },
  };
});

export default useStyles;
