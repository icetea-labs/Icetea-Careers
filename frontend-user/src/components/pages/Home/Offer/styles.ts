import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    offer: {
      width: "100%",
      marginTop: 140,
    },
    offerContainer: {
      maxWidth: 1200,
      padding: "40px 40px 32px 60px",
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
      marginTop: 60,
      // minHeight: 550,
      height: 0,
      paddingBottom: "45.24%",
      marginLeft: "auto",
      position: "relative",
      "& img": {
        position: "absolute",
        zIndex: 1,
      },
      "& .offer-main": {
        zIndex: 2,
        maxWidth: "35.088%",
        width: "100%",
        top: "43%",
        left: "45%",
        transform: "translate(-43%, -45%)",
      },
      "& .offer-bottom-left": {
        bottom: 50,
        left: 50,
        maxWidth: "26.052%",
        width: "100%",
      },
      "& .offer-bottom-right": {
        bottom: 0,
        right: 0,
        maxWidth: "47.105%",
        width: "100%",
      },
      "& .offer-top-left": {
        top: 0,
        left: 0,
        maxWidth: "32.688%",
        width: "100%",
      },
      "& .offer-top-right": {
        top: 0,
        right: 50,
        maxWidth: "43.538%",
        width: "100%",
      },
    },

    offerDetailMobile: {
      width: "100%",
      boxSizing: "border-box",
      padding: "60px 40px 0",
      "& .offer-main": {
        maxWidth: "100%",
      },
      "& .offers": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px 20px",
        marginTop: 74,
      },
      "& .offer-item": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 12,
        font: theme.typography.nn71420.font,
        textAlign: "left",
        "& img": {
          width: 40,
        },
      },
    },
    [theme.breakpoints.down("lg")]: {
      offerContainer: {
        padding: "40px 60px",
        "& .offer-title": {
          font: "normal normal 600 40px/56px Plus Jakarta Sans",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      offerContainer: {
        padding: "0 10px 0 30px",
        "& .offer-title": {
          margin: 0,
          font: "normal normal 600 36px/50px Plus Jakarta Sans",
        },
      },
    },

    [theme.breakpoints.only("xs")]: {
      offer: {
        marginTop: 80,
      },
      offerContainer: {
        "& .offer-title": {
          font: "normal normal 600 32px/44px Plus Jakarta Sans",
        },
      },
    },
  };
});

export default useStyles;
