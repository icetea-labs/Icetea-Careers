import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    jobFormWrap: {
      position: "sticky",
      top: 50,
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "border-box",
      background: "linear-gradient(180deg, #00C7F4 18.33%, #5062E5 109.79%)",
      padding: 32,
      borderRadius: 24,
      "& .form-title": {
        font: theme.typography.nn72432.font,
        textAlign: "center",
        margin: "0 0 20px",
        color: "#000",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    formInput: {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      width: "100%",
      "& .input-field": {
        minHeight: 52,
        width: "100%",
        background: "#fff",
        borderRadius: 8,
        padding: "13px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      },
      "& input, textarea": {
        width: "100%",
        border: "none",
        background: "transparent",
        outline: "none",
        color: "#000",
        font: theme.typography.nn41424.font,
        padding: 0,
        "&:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus":
          {
            background: "transparent !important",
            outline: "none !important",
            WebkitTextFillColor: "#000",
            transition: "background-color 5000s ease-in-out 0s",
          },
      },
      "& textarea": {
        "&::-webkit-scrollbar": {
          width: 8,
          borderRadius: 4,
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: 4,
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: 4,
          background: "#888",
          "&:hover": {
            background: "#555",
          },
        },
      },
      "& .input-error": {
        marginTop: 4,
        paddingLeft: 8,
        color: "#E40000",
        font: "normal normal 400 12px/20px TTHoves",
      },
      "& .input-error-icon": {
        width: 18,
        height: 18,
        cursor: "pointer",
        display: "none",
      },
      "& .input-disabled": {
        border: "1px solid #FF5656",
        "& .input-error-icon": {
          display: "block",
        },
      },
    },
    groupInput: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
    },
    groupName: {
      width: "100%",
      gap: 8,
      display: "flex",
      flexDirection: "column",
    },
    uploadInput: {
      padding: "6px 6px 6px 16px !important",
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
      color: "#000",
      font: "normal normal 400 12px/20px TTHoves",
      paddingLeft: 8,
    },
    groupBtn: {
      marginTop: 12,
      width: "100%",
      position: "relative",
    },
    btnApply: {
      height: 52,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      background: "#000",
      border: "none",
      borderRadius: 4,
      outline: "none",
      font: theme.typography.nn71420.font,
      transition: "0.5s",
      "&:hover": {
        cursor: "pointer",
        letterSpacing: "1px",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
    btnLogin: {
      background: "#C83E3E",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 8,
      "& img": {},
    },
    signInGoogle: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      "&>div": {
        display: "flex",
        alignItems: "center",
      },
    },

    [theme.breakpoints.down("lg")]: {
      jobFormWrap: {
        margin: "0 auto",
        maxWidth: "min(620px, 100%)",
        width: "100%",
      },
      groupName: {
        flexDirection: "row",
      },
    },

    [theme.breakpoints.only("xs")]: {
      jobFormWrap: {
        padding: "24px 20px",
      },
      groupName: {
        flexDirection: "column",
      },
    },
  };
});

export default useStyles;
