import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    loginWrap: {
      width: "100vw",
      height: "100vh",
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loginContainer: {
      width: "100%",
      maxWidth: 520,
      borderRadius: 6,
      background: "#fff",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      "& .login-title": {
        fontSize: 28,
        textAlign: "center",
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
