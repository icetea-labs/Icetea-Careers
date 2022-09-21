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
      padding: "60px 0 12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 44,
    },
    logo: {
      width: 200,
    },
    socials: {
      maxWidth: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
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
    talentTeam: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      font: theme.typography.nn41424.font,

      "& .talent-label": {
        color: "rgba(255, 255, 255, 0.5)",
        letterSpacing: 1,
        font: "normal normal 500 12px/24px TTHoves",
      },
      "& .hr": {
        display: "flex",
        alignItems: "center",
        gap: 10,
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
    hrGroup: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 30,
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
        padding: "0 12px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      footerContainer: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      talentTeam: {
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        "& .hr": {
          justifyContent: "center",
        },
      },
    },
    [theme.breakpoints.down("1024")]: {
      hrGroup: {
        gridTemplateColumns: "1fr",
        gap: 12,
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
        padding: "0 12px",
      },
      footerContainer: {
        padding: "60px 0 12px",
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
    },
  };
});

export default useStyles;
