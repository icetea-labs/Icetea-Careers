import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    jobFormWrap: {
      position: "sticky",
      top: 50,
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      background: "rgba(255, 255, 255, 0.04)",
      padding: 32,
      borderRadius: 32,
      "& .form-title": {
        font: theme.typography.nn72432.font,
        textAlign: "center",
        margin: "0 0 20px",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    formInput: {
      minHeight: 52,
      width: "100%",
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: 8,
      padding: "14px 16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      "& input, textarea": {
        width: "100%",
        border: "none",
        background: "transparent",
        outline: "none",
        color: "#fff",
        font: theme.typography.nn41424.font,
        padding: 0,
        // "&:-internal-autofill-selected": {
        //   background: "transparent !important",
        //   outline: "none !important",
        //   color: "#fff !important",
        // },
      },
      "& .error": {
        color: "red",
      },
    },
    groupInput: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
    },
    uploadInput: {
      padding: 6,
      paddingLeft: 16,
      "& .cv-label": {
        maxWidth: "calc(100% - 80px)",
      },
      "& label": {
        width: 100,
        height: 40,
        marginLeft: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        borderRadius: 4,
        color: "#fff",
        outline: "none",
        border: "none",
        cursor: "pointer",
        position: "relative",
        font: theme.typography.nn71420.font,
        "& input": {
          width: "100%",
          height: "100%",
          position: "absolute",
        },
      },
    },
    cvNote: {
      margin: 0,
      color: "rgba(255, 255, 255, 0.6)",
      font: "normal normal 400 12px/20px Plus Jakarta Sans",
      paddingLeft: 8,
      marginTop: -4,
    },
    btnApply: {
      height: 52,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      background: "#00C7F4",
      border: "none",
      borderRadius: 4,
      outline: "none",
      font: theme.typography.nn71420.font,
      "&:hover": {
        cursor: "pointer",
      },
      "&:disabled": {
        cursor: "not-allowed",
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
