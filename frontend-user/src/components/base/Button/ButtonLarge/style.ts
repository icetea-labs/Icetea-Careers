import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    button: {
      height: 52,
      borderRadius: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#000",
      fontSize: 16,
      fontWeight: 600,
      outline: "none",
      border: "2px solid #00c7f429",
      boxSizing: "border-box",
      padding: "0 32px",
      background: "#00C7F4",
      transition: "0.5s",
      cursor: "pointer",

      "& img": {
        width: 20,
        height: 20,
        marginLeft: 12,
      },

      "&:disabled": {
        cursor: "not-allowed",
      },

      "&:hover": {
        letterSpacing: "1px",
        boxShadow:
          "rgba(14, 30, 37, 0.45) 0px 6px 8px 0px, rgba(14, 30, 37, 0.45) 0px 6px 12px 0px",
      },
    },
  };
});

export default useStyles;
