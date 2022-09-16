import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    footer: {
      // background: "#000",
      width: "100%",
    },
    footerWrap: {
      margin: "0 auto",
      maxWidth: "1440px",
      padding: "0 80px",
      background: "url(/images/bg-footer.png)",
      backgroundSize: "contain",
      width: "100%",
      boxSizing: "border-box",
    },
    footerContainer: {
      color: "#fff",
      padding: "80px 40px 60px",
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
    },
    socialItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
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
      // "&:first-child": {
      //   marginLeft: 0,
      // },
      "& .group-label": {
        margin: "0 0 4px",
        color: "rgba(255, 255, 255, 0.5)",
        letterSpacing: 1,
        font: "normal normal 600 12px/16px TTHoves",
      },
      "& .hr": {
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
    copyRight: {
      color: "#AEAEAE",
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      font: theme.typography.nn41424.font,
      padding: "12px 0",
      textAlign: "center",
    },

    [theme.breakpoints.down("1368")]: {
      footerWrap: {
        padding: "0 60px",
      },
      navigationGroup: {
        marginLeft: 20,
      },
    },
    [theme.breakpoints.down("lg")]: {
      footerContainer: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      navigation: {
        flexWrap: "wrap",
        width: "min-content",
        rowGap: 20,
        columnGap: 60,
      },
      navigationGroup: {
        marginLeft: 0,
      },
    },
    [theme.breakpoints.down("md")]: {
      footerWrap: {
        padding: "0 30px",
      },
      footerContainer: {
        padding: "60px 0",
      },
    },
    [theme.breakpoints.only("xs")]: {
      footerWrap: {
        padding: "0 20px",
      },
      footerContainer: {
        padding: "60px 0 40px",
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
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        marginTop: 40,
        marginLeft: 0,
        padding: "28px 20px 0 20px",
        width: "100%",
        boxSizing: "border-box",
        columnGap: 40,
        rowGap: 40,
        justifyContent: "center",
      },
      navigationGroup: {
        alignItems: "center",
        minWidth: "auto",
        "&.team-mobile": {
          width: "100%",
          alignItems: "unset",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "unset",
          "& .hr": {
            width: "50%",
            "&:last-child": {
              marginTop: 20,
            },
          },
        },
        "& .group-label": {
          textAlign: "center",
          width: "100%",
        },
        "& .hr": {
          display: "flex",
          flexDirection: "column",
          gap: 4,
        },
      },
    },
  };
});

export default useStyles;
