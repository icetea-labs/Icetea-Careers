import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    mainLayout: {
      width: "100%",
      // overflowY: "hidden",
    },
    // [theme.breakpoints.down("md")]: {},
  };
});

export default useStyles;
