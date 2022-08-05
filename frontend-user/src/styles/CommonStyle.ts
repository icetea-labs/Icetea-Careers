import { makeStyles } from "@mui/styles";

const useCommonStyle = makeStyles((theme: any) => {
  return {
    DefaultLayout: {
      minHeight: "100vh",
      fontFamily: "Plus Jakarta Sans",
    },
    fbSection: {
      width: "100%",
      color: "#fff",
      "&>div": {
        height: "100%",
      },
    },
    fbContainer: {
      width: "100%",
      maxWidth: "90rem",
      margin: "0 auto",
    },
    fbGridBase: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: "2rem",
      [theme.breakpoints.only("xs")]: {
        display: "flex",
        flexDirection: "column",
        padding: "0 28px",
        maxWidth: "calc(100% - 56px)",
      },
    },
    bgBody: {
      // backgroundImage: "url(/images/bg_dashboard.png)",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "100% 555px",
      // backgroundPositionX: "center",
      position: "relative",
      minHeight: "100vh",
      overflow: "auto",
    },
    dashboardLayout: {
      "& .dashboard": {
        paddingTop: 0,
        background: "url(/images/bg-full.png) no-repeat",
        backgroundSize: "cover",
      },
      "& .footer": {
        borderTop: 0,
      },
    },
    eventLayout: {
      "& .dashboard": {
        background: "none",
      },
    },
    flexCol: {
      display: "flex",
      flexDirection: "column",
    },
    flexColCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
    },
    flexRowCenter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    mb8: {
      marginBottom: 8,
    },
    mt8: {
      marginTop: 8,
    },
    colorRed: {
      color: "#D01F36",
    },
    skeleton: {
      background: "#515151",
      borderRadius: 4,
    },
    headPage: {
      display: "flex",
      marginBottom: 25,
    },
    headPageLeft: {},
    headPageRight: {
      marginLeft: "auto",
      display: "flex",
    },
    btnBack: {
      background: "#FFCC00",
      boxShadow: "0px 0px 15px rgba(243, 203, 25, 0.3)",
      borderRadius: 8,
      height: 40,
      minWidth: 92,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 160,
      alignItems: "center",
      color: "#FFFFFF",
      textTransform: "inherit",
      fontFamily: "Roboto-Bold",
      overflow: "hidden",
      "&:hover": {
        background: "#FFCC00",
      },
    },
    inputSearch: {
      background: "#F0F0F0",
      borderRadius: 8,
      width: 228,
      maxWidth: "100%",
      height: 40,
      outline: "none",
      border: "none",
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "black",
      padding: "10px 15px",
      paddingRight: 40,
    },
    iconSearch: {
      position: "absolute",
      right: 16,
      top: 12,
    },

    loader: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    loaderText: {
      fontWeight: 700,
      marginTop: 20,
      color: "#999999",
      font: "normal normal bold 14px/18px DM Sans",
    },
    modal: {
      position: "fixed",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: 5,
      backgroundColor: "rgba(3, 9, 46, 0.6)",

      "& .MuiBackdrop-root": {
        background: "none",
      },
      "& .MuiPaper-rounded": {
        background: "none",
      },
      "& .modal-content": {
        width: "480px",
        maxWidth: "100%",
        maxHeight: "80%",
        overflow: "auto",
        padding: "60px",
        background: "#020616",
        borderRadius: "4px",
      },

      "& .modal-content__head": {
        padding: "10px 0",
        "& .title": {
          color: "#FFFFFF",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "24px",
          textAlign: "center",
        },

        "& .btn-close": {
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        },
      },

      "& .modal-content__body": {
        borderRadius: "4px",
        padding: "10px 12px",
        margin: "20px 0 32px 0",

        "& .subtitle": {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#999999",
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "18px",
        },

        "& .input-group": {
          position: "relative",
        },

        "& .input-group input": {
          width: "100%",
          height: "40px",
          background: "none",
          fontFamily: "Helvetica",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "24px",
          color: "#FDFDFD",
          border: "none",
          outline: "none",
          paddingRight: "60px",
        },

        "& .input-group .btn-max": {
          width: "50px",
          height: "20px",
          color: "#000",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "12px",
          lineHeight: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          outline: "none",
          background: "#FFFFFF",
          padding: "0 12px",
          borderRadius: "1rem",

          "&:hover": {
            cursor: "pointer",
          },
        },

        "& .input-group span": {
          color: "#000",
        },

        "& .input-group div": {
          position: "absolute",
          right: "0",
          top: "10px",
        },
      },

      "& .modal-content__foot": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,

        "& button": {
          borderRadius: "60px",
          color: "#FFFFFF",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          outline: "none",
          padding: "12px 60px",

          "&:hover": {
            cursor: "pointer",
          },

          "&.disabled": {
            backgroundColor: "#727272!important",
          },

          "&:first-child": {
            backgroundColor: "#3232DC",
          },

          "&.btn-cancel": {
            backgroundColor: "#727272",
          },
        },
      },
    },

    tooltip: {
      maxWidth: 500,
      backgroundColor: "#030925",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.07)",
      borderRadius: "4px",
      padding: "7px 10px",
      "&:before": {
        content: '""',
        width: "10px",
        height: "10px",
        display: "block",
        backgroundColor: "#030925",
        transform: "rotate(-45deg)",
        position: "absolute",
        left: "5px",
        bottom: "10px",
      },
    },

    [theme.breakpoints.down("xs")]: {
      DefaultLayout: {
        background: "#1a1a1a",
      },
      modal: {
        "& .modal-content__body": {
          padding: "0",
        },
        "& .modal-content": {
          padding: "15px",
        },
        "& .modal-content__foot": {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",

          "& button": {
            padding: "12px 30px",
            width: "100%",
            marginBottom: "15px",
          },
        },
        "& .MuiDialogActions-spacing > :not(:first-child)": {
          marginLeft: "0",
        },
      },
    },
  };
});

export default useCommonStyle;
