import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    foreword: {
      width: "100%",
      padding: "40px 0 80px",
    },
    forewordLeft: {
      maxWidth: "35.07%",
      marginRight: 40,
      "& img": {
        maxWidth: "100%",
      },
      "& .foreword-mobile": {
        display: "none",
      },
    },
    forewordRight: {
      maxWidth: "46.875%",
      "& img": {
        width: "100%",
      },
    },
    forewordContainer: {
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      color: "#fff",
      "& p": {
        margin: 0,
      },
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: 460,
      background: theme.palette.primary.main,
      borderRadius: 60,
      height: 60,
      padding: 6,
      marginTop: "15%",
      boxSizing: "border-box",
      font: theme.typography.nn41424.font,
      color: "#000",

      "& .search-field": {
        flex: 1,
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: 60,
        padding: "12px 16px",
        "& img": {
          marginRight: 12,
          width: 24,
        },
        "& input": {
          height: "100%",
          padding: 0,
          border: "none",
          outline: "none",
        },
      },
      "& .search-btn": {
        padding: "0 20px",
        color: "#000",
        fontWeight: 700,
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    [theme.breakpoints.down("lg")]: {
      forewordLeft: {
        marginRight: 30,
      },
    },
    [theme.breakpoints.down("md")]: {
      forewordContainer: {
        flexDirection: "column",
        padding: "0 100px",
      },
      forewordLeft: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "max(60%, 570px)",
        marginRight: 0,
        padding: "0 28px",
        "& .foreword": {
          display: "none",
        },
        "& .foreword-mobile": {
          display: "block",
        },
      },
      forewordRight: {
        maxWidth: "100%",
        marginTop: 60,
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
