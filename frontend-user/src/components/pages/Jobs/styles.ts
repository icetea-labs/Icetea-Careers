import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
