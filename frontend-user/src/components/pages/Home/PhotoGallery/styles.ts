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
        width: "100%",
        maxWidth: "100%",
      },
    },

    [theme.breakpoints.only("xs")]: {
      gallery: {
        marginTop: 88,
      },
    },
  };
});

export default useStyles;
