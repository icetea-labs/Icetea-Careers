import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    modalContainer: {
      maxWidth: 600,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#0A0F11",
      display: "flex",
      flexDirection: "column",
      color: "#fff",
      justifyContent: "center",
      alignItems: "center",
      outline: "none",
      padding: "40px 60px",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      boxSizing: "border-box",
      font: theme.typography.nn41424.font,

      "& .title": {
        font: "normal normal 600 24px/32px Plus Jakarta Sans",
        textAlign: "center",
        maxWidth: 400,
        marginBottom: 20,
      },
      "& .contact": {
        alignSelf: "flex-start",
        display: "flex",
        alignItems: "center",
        marginTop: 8,
        gap: 8,
        "& img": {
          width: 12,
          height: 12,
        },
      },
      "& .info": {
        color: "#00E0FF",
        font: theme.typography.nn71420.font,
        textAlign: "center",
        marginTop: 20,
      },
      "& .img-title": {
        width: 140,
        height: 140,
      },
      "& p": {
        margin: 0,
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
