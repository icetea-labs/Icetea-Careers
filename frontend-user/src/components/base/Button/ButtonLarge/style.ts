import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    button: {
      height: 52,
      borderRadius: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      font: theme.typography.nn71420.font,
      outline: "none",
      border: "2px solid #00c7f429",
      boxSizing: "border-box",
      padding: "0 38px",
      background:
        "radial-gradient(50% 50% at 50% 50%, #00c7f400 0%, #00c7f429 100%)",
      // background:
      //   "linear-gradient(#00c7f400, #00c7f429) padding-box, linear-gradient(180deg, rgba(0, 199, 244, 0.3) 0%, rgba(215, 246, 253, 0.63) 55.73%, rgba(0, 199, 244, 0.51) 100%) border-box",
      transition: "background 1s",

      "&:hover": {
        cursor: "pointer",
        background:
          "linear-gradient(#00576e, #00576e) padding-box, linear-gradient(180deg, rgba(0, 199, 244, 0.3) 0%, rgba(215, 246, 253, 0.63) 55.73%, rgba(0, 199, 244, 0.51) 100%) border-box",
    },

      "&:disabled": {
        cursor: "not-allowed",
        // opacity: 0.6,
      },
    },
  };
});

export default useStyles;
