import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    header: {
      width: "100%",
      position: "absolute",
      zIndex: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
      maxWidth: "90rem",
      // padding: "0 20px",
      left: "50%",
      transform: "translate(-50%)",
      "& .header-logo": {
        height: 40,
        marginLeft: 20,
      },
    },
    headerMenu: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 500,
      "& .menu-item": {
        font: "normal normal 400 18px/32px Plus Jakarta Sans",
        color: "#fff",
        cursor: "pointer",
        padding: "8px 16px",
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
    btnDownload: {
      height: 48,
      marginRight: 20,
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      letterSpacing: "1px",
      font: "normal normal 700 12px/18px Plus Jakarta Sans",
      padding: "0 34px",
      color: "#fff",
      background: theme.palette.primary.main,
      borderRadius: 60,
      textDecoration: "none",
      transition: "0.5s all",
      "&:hover": {
        letterSpacing: "1.5px",
        boxShadow: "0 0 35px #EB522F",
        transition: "0.5s all",
      },
      [theme.breakpoints.down("lg")]: {
        marginRight: 20,
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
      "& .popup-community": {
        marginBottom: 60,
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "&-title": {
          color: theme.palette.primary.main,
          font: "normal normal 400 14px/24px Plus Jakarta Sans",
        },
        "&-socials": {
          display: "flex",
          justifyContent: "center",
          gap: 12,
        },
      },
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
    },

    [theme.breakpoints.down("lg")]: {
      btnDownload: {
        height: 40,
        padding: "0 20px",
      },
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
      btnDownload: {
        height: 36,
        marginRight: 12,
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
