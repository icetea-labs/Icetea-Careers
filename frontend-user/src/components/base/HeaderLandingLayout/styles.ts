import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    header: {
      width: "100%",
      maxWidth: 1200,
      margin: "0 auto",
      zIndex: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
      "& .header-logo": {
        height: 28,
      },
    },
    headerMenu: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: 20,
      color: "#fff",
      fontWeight: 500,
      "& .menu-item": {
        width: 120,
        padding: "20px 0",
        textAlign: "center",
        font: theme.typography.nn41424.font,
        color: "#fff",
        cursor: "pointer",
        textDecoration: "none",
        transition: "background-size 0.3s ease-in-out",
        backgroundSize: "0%",
        "&:hover": {
          background: "url(/images/bg-menu-actived.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "100%",
          letterSpacing: "1px",
          transition: "letter-spacing 0.5s",
        },
      },
    },
    headerMobile: {
      display: "none",
    },

    headerMobilePopup: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#04060c",
      // transform: "scale(0)",
      // transition: "all .2s ease-out",
      // "&.show": {
      //   transform: "scale(1)",
      // },
      "& .popup-header": {
        height: 60,
        width: "100%",
        display: "flex",
        alignItems: "center",
        "& .header-logo": {
          width: 60,
          height: 60,
        },
        "& .header-close": {
          marginLeft: "auto",
          marginRight: 20,
          cursor: "pointer",
        },
      },
      "& .popup-navigation": {
        height: "calc(100vh - 120px)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        marginTop: 60,
        font: "normal normal 600 20px/32px Plus Jakarta Sans",
        "& .button-download": {
          margin: "32px 0 0",
        },
        "&-item": {
          cursor: "pointer",
          transition: "0.5s all",
          "&:hover": {
            letterSpacing: "1.5px",
            fontWeight: 700,
            textDecoration: "underline",
          },
        },
      },
    },
    socials: {
      display: "flex",
      width: 155,
    },
    socialItem: {
      width: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
      marginLeft: 12,
      "&:first-child": {
        marginLeft: 0,
      },
    },

    [theme.breakpoints.down("lg")]: {
      headerMenu: {
        "& .menu-item": {
          fontSize: 16,
        },
      },
    },
    [theme.breakpoints.down("1024")]: {
      header: {
        "& .header-logo": {
          height: 36,
          marginLeft: 12,
        },
      },
      headerMenu: {
        "& .menu-item": {
          fontSize: 14,
          padding: "0 8px",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      header: { display: "none" },
      headerMobile: {
        position: "absolute",
        zIndex: 101,
        top: 0,
        left: 0,
        width: "100%",
        height: 92,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& .header-logo": {
          marginLeft: 20,
        },
        "& .header-toggle": {
          marginRight: 20,
          height: 29,
        },
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
