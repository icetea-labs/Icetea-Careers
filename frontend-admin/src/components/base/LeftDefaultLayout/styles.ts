import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    leftLayout: {
      minWidth: "316px",
      minHeight: "100vh",
      background: "#202020",
      color: "#8D8D8D",
      padding: "20px 14px",
      position: "relative",
    },
    smallLeft: {
      minWidth: "100px",
      transition: "min-width 0.5s",
    },
    headLeft: {
      display: "flex",
      alignItems: "center",
      marginBottom: 24,
    },
    BoxInfoUser: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      width: 48,
      height: 48,
      marginRight: 10,
      objectFit: "cover",
    },
    infoUser: {
      minWidth: 180,

      "& .name": {
        overflowWrap: "anywhere",
        fontSize: 16,
        lineHeight: "26px",
        color: "#FFFFFF",
        whiteWpace: "nowrap",
      },
      "& .status": {
        display: "flex",
        alignItems: "center",
        letterSpacing: 0.4,
        color: "#9A9A9A",
        whiteWpace: "nowrap",

        "& .icon": {
          marginLeft: 7,
        },
      },
    },
    btnSmallBig: {
      marginLeft: "auto",
      padding: 0,
      minWidth: 40,
      width: 40,
      height: 40,
      color: "#9a9a9a",

      "&.btnSmall": {
        transform: "rotate(180deg)",
      },
    },
    navLeft: {
      width: "100%",
      listStyleType: "none",
      padding: 0,
    },
    itemNavLeft: {
      width: "100%",
      marginBottom: 5,
    },
    linkItemNavLeft: {
      display: "flex",
      alignItems: "center",
      borderRadius: 12,
      minHeight: 74,
      padding: 19,
      fontSize: 16,
      lineHeight: "20px",
      color: "#8D8D8D",
      transition: "0.3s",
      textDecoration: "none",
      cursor: "pointer",

      "&.active": {
        background: "rgb(255 255 255 / 10%)",
        color: "#FFCC00",

        "& .icon": {
          backgroundColor: "#FFCC00",
        },
      },

      "&:hover": {
        background: "rgb(255 255 255 / 10%)",
        color: "#FFFFFF",
        transition: "0.3s",

        "& .icon": {
          backgroundColor: "#FFFFFF",
        },
      },

      "& .icon": {
        width: 30,
        height: 30,
        maskImage: `url('/images/icon_nav_left/icon-home.svg')`,
        backgroundColor: "#9A9A9A",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        marginRight: 19,

        "&.icon-small": {
          margin: "auto",
        },

        "&.icon-home": {
          maskImage: `url('/images/icon_nav_left/icon-home.svg')`,
        },

        "&.icon-list-campaign": {
          maskImage: `url('/images/icon_nav_left/icon-list-campaign.svg')`,
        },

        "&.icon-history": {
          maskImage: `url('/images/icon_nav_left/icon-history.svg')`,
        },

        "&.icon-setting": {
          maskImage: `url('/images/icon_nav_left/icon-setting.svg')`,
        },
      },
    },
    Copyright: {
      fontSize: 12,
      lineHeight: "16px",
      textAlign: "center",
      letterSpacing: 0.4,
      color: "#8D8D8D",
      position: "absolute",
      bottom: 16,
      left: 0,
      width: "100%",
    },
  };
});

export default useStyles;
