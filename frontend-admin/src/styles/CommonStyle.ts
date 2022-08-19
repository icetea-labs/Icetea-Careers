import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useCommonStyle = makeStyles((theme: Theme) => {
  return {
    DefaultLayout: {
      minHeight: "100vh",
      fontFamily: "Roboto",
      background: "url(/images/bg-default.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    LandingLayout: {
      minHeight: "100vh",
      fontFamily: "Roboto",
      background: "url(/images/bg-landing.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    section: {
      width: "100%",
      maxWidth: "90rem",
      margin: "0 auto",
    },
    bgBody: {
      position: "relative",
      minHeight: "100vh",
      overflow: "auto",
    },
    flexCol: {
      display: "flex",
      flexDirection: "column",
    },
    flexColCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
    },
    flexRowCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    skeleton: {
      background: "#515151",
      borderRadius: 4,
    },

    loader: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    loaderText: {
      fontWeight: 700,
      marginTop: 20,
      color: "#999999",
      font: "normal normal bold 14px/18px Roboto",
    },

    [theme.breakpoints.down("xs")]: {
      DefaultLayout: {
        background: "#1a1a1a",
      },
    },
  };
});

export default useCommonStyle;
