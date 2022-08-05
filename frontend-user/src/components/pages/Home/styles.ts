import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {

  return {
    colorOrange: {
      color: theme.palette.primary.main,
    },

    btnScrollToTop: {
      width: 50,
      height: 50,
      position: "fixed",
      bottom: 24,
      right: 24,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "0.5s all",
      cursor: "pointer",
      background: "#FF8450",
      color: "#000",
      zIndex: 100,

      "&:hover": {
        boxShadow: "0 0 32px #FF8450",
        transform: "translateY(-7px)",
        transition: "0.5s all",
      },

      "& img": {
        width: 24,
        height: 24,
      },
    },
    [theme.breakpoints.only("xs")]: {
      btnScrollToTop: {
        width: 32,
        height: 32,
        bottom: 12,
        right: 12,
        "& img": {
          width: 18,
          height: 18,
        },
      },
    },
  };
});

export default useStyles;
