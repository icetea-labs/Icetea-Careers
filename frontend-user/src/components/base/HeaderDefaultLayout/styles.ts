import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    header: {
      width: "100%",
      maxWidth: 1200,
      margin: "0 auto",
      zIndex: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
      "& .header-logo": {
        height: 28,
      },
    },
    headerMenu: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: 20,
      color: "#fff",
      fontWeight: 500,
      "& .menu-item": {
        width: 120,
        padding: "20px 0",
        textAlign: "center",
        font: theme.typography.nn41424.font,
        color: "#fff",
        cursor: "pointer",
        textDecoration: "none",
        transition: "background-size 0.3s ease-in-out",
        backgroundSize: "0%",
        "&:hover": {
          background: "url(/images/bg-menu-actived.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "100%",
          letterSpacing: "1px",
          transition: "letter-spacing 0.5s",
        },
      },
    },
    socials: {
      display: "flex",
    },
    socialItem: {
      width: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "#fff",
      transition: "0.5s all",
      marginLeft: 12,
      "&:first-child": {
        marginLeft: 0,
      },
    },

    [theme.breakpoints.down("md")]: {
      header: {
        padding: "0 24px",
        boxSizing: "border-box",
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
