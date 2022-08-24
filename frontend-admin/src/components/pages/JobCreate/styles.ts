import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    formContainer: {
      marginTop: 40,

      "& .MuiGrid-root": {
        margin: 0,
      },
    },

    formGrid: {
      backgroundColor: "white",
      boxShadow: `0px 0px 15px rgba(0, 0, 0, 0.1)`,
      borderRadius: 10,
      padding: "20px 25px 30px 25px !important",
      margin: 8,
      marginBottom: 20,
      "&.MuiGrid-grid-xs-6": {
        maxWidth: "calc(50% + -16px)",
      },
    },
    formFieldGroup: {
      display: "flex",
      gap: 120,
    },

    formControl: {
      marginTop: 30,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },

    formControlLabel: {
      fontSize: 18,
      fontWeight: 700,
      color: "#363636",
      marginBottom: 8,
    },
    formControlInput: {
      marginTop: 12,
    },

    groupButton: {
      width: "100%",
      maxWidth: "80%",
      margin: "40px auto 0",
      display: "flex",
      gap: 40,
      "& button": {
        flex: 1,
        height: 52,
        borderRadius: 10,
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
