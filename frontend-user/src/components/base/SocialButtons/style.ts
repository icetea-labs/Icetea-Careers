import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    buttons: {
      display: "flex",
      gap: 12,
    },
    swipeButton: {
      position: "relative",
      // width: 124,
      height: 40,
      boxSizing: "border-box",
      background: "#fff",
      borderRadius: 60,
      padding: 6,
      display: "flex",
      alignItems: "center",
      color: "#000",
      textDecoration: "none",
      paddingLeft: 40,
      paddingRight: 20,
      transition: "0.5s",
      fontSize: 14,
      fontWeight: 600,

      "&:hover": {
        paddingLeft: 20,
        paddingRight: 40,
        "& img": {
          left: "calc(100% - 34px)",
        },
      },
      "& img": {
        position: "absolute",
        left: 6,
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "",
        transition: "0.5s ease-in-out",
      },
    },
  };
});

export default useStyles;
