import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    gallery: {
      width: "100%",
      marginTop: 180,
    },
    galleryContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      margin: "0 auto",
      color: "#fff",
      "& img": {
        maxWidth: "100%",
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
