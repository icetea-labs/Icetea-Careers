import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useCommonStyle = makeStyles((theme: Theme) => {
  return {
    DefaultLayout: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Roboto",
    },
    skeleton: {
      background: "#515151",
      borderRadius: 4,
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
      font: "normal normal bold 14px/18px Roboto",
    },

    [theme.breakpoints.down("xs")]: {
      DefaultLayout: {
        background: "#1a1a1a",
      },
    },
  };
});

export default useCommonStyle;
