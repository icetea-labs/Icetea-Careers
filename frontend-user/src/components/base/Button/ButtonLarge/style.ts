import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    button: {
      height: 52,
      borderRadius: 60,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      font: theme.typography.nn71420.font,
      outline: "none",
      padding: 1.5,
      border: "none",
      boxSizing: "border-box",
      "& span": {
        background: "#000",
        // background:
        //   "radial-gradient(50% 50% at 50% 50%, #fff 0%, #d6f6fd 100%)",
        padding: "0 38px",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        borderRadius: 60,
      },
      "&:before": {
        content: "close-quote",
        position: "absolute",
        borderRadius: "inherit",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, #b2eefc 0%, #e6f9fe 55.73%, #7de2f9 100%)",
        // background:
        //   "linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b)",
      },
      "&:hover": {
        cursor: "pointer",
        "& span": {
          background: "#00576e",
        },
      },

      "&:disabled": {
        cursor: "not-allowed",
        // opacity: 0.6,
      },
    },
  };
});

export default useStyles;
