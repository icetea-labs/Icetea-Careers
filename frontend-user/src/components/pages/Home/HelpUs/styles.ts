import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    helpus: {
      width: "100%",
      marginTop: 180,
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

    [theme.breakpoints.only("xs")]: {
      forewordContainer: {
        maxWidth: "100%",
        padding: 0,
      },
    },
  };
});

export default useStyles;
