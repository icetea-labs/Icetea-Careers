import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    error: {
      marginTop: 4,
      paddingLeft: 8,
      fontWeight: 700,
      color: "rgba(255, 86, 86, 1)",
    },
  };
});
export default useStyles;
