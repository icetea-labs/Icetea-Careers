import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    offer: {
      width: "100%",
      marginTop: 140,
    },
    offerContainer: {
      maxWidth: 1200,
      padding: "40px 0 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: "0 auto",
      color: "#fff",
      "& .offer-title": {
        margin: 0,
        font: "normal normal 600 48px/68px Plus Jakarta Sans",
      },
    },
    offerDetail: {
      width: "100%",
      maxWidth: 1140,
      minHeight: 550,
      marginLeft: "auto",
      position: "relative",
      "& img": {
        position: "absolute",
        zIndex: 1,
      },
      "& .offer-main": {
        zIndex: 2,
        top: "43%",
        left: "45%",
        transform: "translate(-43%, -45%)",
      },
      "& .offer-bottom-left": {
        bottom: 50,
        left: 50,
      },
      "& .offer-bottom-right": {
        bottom: 0,
        right: 0,
      },
      "& .offer-top-left": {
        top: 0,
        left: 0,
      },
      "& .offer-top-right": {
        top: 0,
        right: 50,
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
