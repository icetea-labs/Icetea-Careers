import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    helpus: {
      width: "100%",
      marginTop: 180,
      boxSizing: "border-box",
    },
    helpusContainer: {
      maxWidth: 1000,
      padding: "40px 0 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: "0 auto",
      color: "#fff",
      background:
        "url(/images/helpus-layer-top.svg) no-repeat center top, url(images/helpus-layer-bottom.svg) no-repeat center bottom",
      "& .helpus-title": {
        font: "normal normal 600 48px/68px Plus Jakarta Sans",
      },
    },

    [theme.breakpoints.down("lg")]: {
      helpusContainer: {
        padding: "40px 60px",
        "& .helpus-title": {
          font: "normal normal 600 40px/56px Plus Jakarta Sans",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      helpusContainer: {
        "& .helpus-title": {
          font: "normal normal 600 36px/50px Plus Jakarta Sans",
        },
      },
    },
    [theme.breakpoints.only("xs")]: {
      helpus: {
        marginTop: 80,
        padding: "40px 20px",
      },
      helpusContainer: {
        "& .helpus-title": {
          margin: "40px 0",
          font: "normal normal 600 32px/44px Plus Jakarta Sans",
        },
      },
    },
  };
});

export default useStyles;
