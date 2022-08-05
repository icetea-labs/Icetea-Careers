import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    footer: {
      background: "#000",
      width: "100%",
      margin: "0 auto",
    },
    footerWrap: {
      margin: "0 auto",
      maxWidth: "1440px",
      background: "url(/images/bg-footer.png)",
      backgroundSize: "contain",
      width: "100%",
    },
    footerContainer: {
      color: "#fff",
      padding: "174px 0 46px",
      display: "flex",
    },
    socials: {
      maxWidth: 320,
      marginLeft: 160,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      "& .description": {
        margin: "18px 0 12px",
        font: "14px/24px Plus Jakarta Sans",
        maxWidth: 330,
      },
    },
    socialList: {
      width: "100%",
      display: "flex",
      gap: 8,
    },
    socialItem: {
      width: 32,
      height: 32,
      background: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
      "& img": {
        width: 18,
        height: 18,
      },
      "&:hover": {
        background: theme.palette.primary.main,
        transition: "0.5s all",
        "& img": {
          color: "#fff",
        },
      },

      "& span": {
        color: "#fff",
        font: "14px/24px Plus Jakarta Sans",
      },
    },
    navigation: {
      display: "flex",
      marginTop: 10,
      marginLeft: "15%",
    },
    navigationGroup: {
      display: "flex",
      flexDirection: "column",
      minWidth: 150,
      "& .group-label": {
        margin: '0 0 16px',
        font: "normal normal 600 14px/24px Plus Jakarta Sans",
      },
    },
    navigationItem: {
      marginTop: 8,
      font: "14px/24px Plus Jakarta Sans",
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
        transition: "0.5s all",
      },
    },
    copyRight: {
      color: "#AEAEAE",
      font: "14px/24px Plus Jakarta Sans",
      textAlign: "center",
    },

    [theme.breakpoints.down("lg")]: {
      navigation: {
        marginLeft: "5%",
      },
      socials: {
        marginLeft: "10%",
      },
    },
    [theme.breakpoints.down("768")]: {
      footerWrap: {
        backgroundSize: "cover",
      },
      footerContainer: {
        flexDirection: "column",
        padding: "60px 60px 40px",
      },
      navigation: {
        marginLeft: 0,
        marginTop: 40,
      },
      socials: {
        marginLeft: 0,
      },
    },
    [theme.breakpoints.only("xs")]: {
      footerWrap: {
        paddingBottom: 8,
        backgroundSize: "inherit",
      },
      footerContainer: {
        padding: "60px 28px 40px",
        display: "flex",
        flexDirection: "column",
      },
      socials: {
        maxWidth: "100%",
        gridColumn: "none",
        paddingLeft: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .description": {
          textAlign: "center",
          margin: "12px 0 20px",
        },
      },
      socialList: {
        justifyContent: "center",
      },
      navigation: {
        display: "none",
      },
    },
  };
});

export default useStyles;
