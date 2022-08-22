import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  spacing: number;
}

const useStyles = makeStyles<Theme, Props>((props: any) => ({
  button: {
    height: 52,
    padding: "0 28px",
    color: "#fff",
    backgroundColor: "#FFCC00",
    border: "none",
    borderRadius: 10,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: ".2s all ease-in",
    "& p": {
      margin: 0,
    },
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      boxShadow: "0px 15px 20px rgba(0, 0, 0, .1)",
      transform: "translateY(-7px)",
    },
    "& img": {
      width: 20,
      height: 20,
      marginRight: 8,
    },
  },
}));

export default useStyles;
