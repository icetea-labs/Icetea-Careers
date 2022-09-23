import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    header: {
      width: "100%",
      maxWidth: 1440,
      padding: "0 100px",
      boxSizing: "border-box",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
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
        font: "normal normal 400 14px/24px TTHoves Medium",
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
      height: "100%",
      overflowY: "hidden",
      background: "#04060c",
      padding: 20,
      zIndex: 100,
      boxSizing: "border-box",
      "& .popup-header": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        "& .header-close": {
          marginLeft: "auto",
          cursor: "pointer",
        },
      },
      "& .popup-navigation": {
        height: "calc(100vh - 200px)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        marginTop: 80,
        font: "normal normal 600 20px/32px TTHoves",
        "& .button-download": {
          margin: "32px 0 0",
        },
        "& .community": {
          marginTop: "auto",
          font: "normal normal 600 12px/16px TTHoves",
          letterSpacing: "1px",
          marginBottom: -20,
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
      gap: 12,
    },
    socialItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
      "&:first-child": {
        marginLeft: 0,
      },
    },

    [theme.breakpoints.down("lg")]: {
      header: {
        padding: "0 32px",
      },
      headerMenu: {
        "& .menu-item": {
          width: "auto",
          padding: "20px 10px",
        },
      },
    },
    [theme.breakpoints.down("1024")]: {},
    [theme.breakpoints.down("md")]: {
      header: {
        display: "none",
      },
      headerMobile: {
        overflow: "hidden",
        width: "100%",
        padding: "0 60px",
        boxSizing: "border-box",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        "& .header-logo": {
          height: 28,
        },
        "& .header-toggle": {
          height: 32,
        },
      },
      headerMobilePopup: {
        "& .popup-navigation": {
          gap: 40,
          font: "normal normal 600 24px/32px TTHoves",
        },
      },
      socials: {
        gap: 16,
      },
    },
    [theme.breakpoints.only("xs")]: {
      headerMobile: {
        padding: "0 24px",
      },
    },
  };
});

export default useStyles;
