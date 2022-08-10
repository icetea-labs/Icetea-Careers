import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    footer: {
      // background: "#000",
      width: "100%",
    },
    footerWrap: {
      margin: "0 auto",
      maxWidth: "1200px",
      background: "url(/images/bg-footer.png)",
      backgroundSize: "contain",
      width: "100%",
    },
    footerContainer: {
      color: "#fff",
      padding: "80px 0 60px",
      display: "flex",
    },
    logo: {
      width: 200,
    },
    socials: {
      maxWidth: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      font: theme.typography.nn41424.font,
      "& p": {
        margin: 0,
      },
      "& .description": {
        margin: "8px 0 20px",
        maxWidth: 290,
      },
      "& .mail": {
        marginTop: 20,
        marginBottom: 8,
        color: theme.palette.primary.main,
      },
    },
    socialList: {
      width: "100%",
      display: "flex",
      gap: 12,
    },
    socialItem: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
      "& img": {
        width: 20,
        height: 20,
      },
      "&:hover": {
        transition: "0.5s all",
      },
    },
    navigation: {
      display: "flex",
      marginTop: 10,
      marginLeft: "auto",
      font: theme.typography.nn41424.font,
    },
    navigationGroup: {
      display: "flex",
      flexDirection: "column",
      minWidth: 150,
      marginLeft: 40,
      "& .group-label": {
        margin: "0 0 4px",
        color: "rgba(255, 255, 255, 0.5)",
        letterSpacing: 1,
        font: "normal normal 600 12px/16px Plus Jakarta Sans",
      },
    },
    navigationItem: {
      marginTop: 12,
      color: "#fff",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
        transition: "0.5s all",
        cursor: "pointer",
      },
    },
    hr: {
      display: "grid",
      gridTemplateColumns: "100px 120px 1fr",
      gap: 12,
      marginTop: 10,
      "& .hr-name": {
        color: theme.palette.primary.main,
      },
      "& .hr-tele": {
        display: "flex",
        alignItems: "center",
        "& img": {
          height: 12,
          marginRight: 6,
        },
      },
    },
    copyRight: {
      color: "#AEAEAE",
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      font: theme.typography.nn41424.font,
      padding: "12px 0",
      textAlign: "center",
    },

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("768")]: {},
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
