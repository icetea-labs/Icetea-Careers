import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    button: {
      height: 36,
      borderRadius: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px",
      font: theme.typography.nn61216.font,
      color: theme.palette.primary.main,
      boxSizing: "border-box",
      outline: "none",
      border: "1px solid rgba(0, 0, 0, 0)",
      "&:hover": {
        cursor: "pointer",
        borderImageSource:
          "linear-gradient(180deg, rgba(0, 199, 244, 0.3) 0%, rgba(215, 246, 253, 0.63) 55.73%, rgba(0, 199, 244, 0.51) 100%)",
      },
      "& img": {
        width: 20,
        height: 20,
        marginLeft: 12,
      },

      "&:disabled": {
        cursor: "not-allowed",
        // opacity: 0.6,
      },
    },
  };
});

export default useStyles;
