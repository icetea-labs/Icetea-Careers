import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    rightLayout: {
      flex: 1,
      padding: "30px 60px",
      backgroundColor: "#F9F9F9",
    },
  };
});

export default useStyles;
