import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    helpus: {
      width: "100%",
      marginTop: 180,
      boxSizing: "border-box",
    },
    helpusContainer: {
      maxWidth: "min(1240px, 86%)",
      padding: "40px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: "0 auto",
      color: "#fff",
      boxSizing: "border-box",
      background: "url(/images/helpus.png)",
      backgroundSize: "cover",
      borderRadius: 32,
      backgroundRepeat: "no-repeat",
      "& p": {
        margin: 0,
      },
      "& .helpus-title": {
        font: "normal normal 700 48px/68px TTHoves",
      },
      "& .blending": {
        display: "inline",
        backgroundColor: "#00c7f4",
        color: "#000",
        padding: "0 20px",
        lineHeight: 40,
      },
    },

    [theme.breakpoints.down("lg")]: {
      helpusContainer: {
        maxWidth: "100%",
        margin: "0 32px",
        "& .helpus-title": {
          font: "normal normal 600 40px/56px TTHoves",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      helpusContainer: {
        padding: "40px 20px",
        "& .helpus-title": {
          font: "normal normal 600 36px/50px TTHoves",
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
          font: "normal normal 600 32px/44px TTHoves",
        },
      },
    },
  };
});

export default useStyles;
