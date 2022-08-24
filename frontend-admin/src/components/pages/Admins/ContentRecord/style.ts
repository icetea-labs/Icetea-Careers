import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  tableRow: {
    backgroundColor: "#f3f3f3",
    borderRadius: 5,
    textDecoration: "none",

    "& > .MuiTableCell-root:first-child": {
      "border-top-left-radius": 5,
      "border-bottom-left-radius": 5,
    },

    "& > .MuiTableCell-root:last-child": {
      "border-top-right-radius": 5,
      "border-bottom-right-radius": 5,
    },
  },
  tableCell: {
    borderBottom: "none !important",

    "& .admin-status": {
      width: 10,
      height: 10,
      display: "inline-block",
      borderRadius: "50%",
      marginRight: 6,
    },

    "& .admin-disable": {
      backgroundColor: "red",
    },

    "& .admin-active": {
      backgroundColor: "#56b022",
    },
    "& .group-button": {
      display: "flex",
      gap: 12,
      "& button": {
        minWidth: "auto",
        padding: 6,
      },
    },
  },
  tableCellFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& .left": {
      display: "flex",
      alignItems: "center",

      "& > span": {
        marginLeft: 5,
      },
      "& > .check": {
        color: "#00AF12",
      },
      "& > .cancel": {
        color: "#B9B9B9",
      },
    },

    "& .right": {
      cursor: "pointer",
      position: "relative",
    },
  },
  tableCellTitle: {
    borderBottom: "none !important",
  },
  btnView: {
    backgroundColor: "#585858 !important",
  },
  wordBreak: {
    display: "inline-block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: 250,
    maxWidth: 250,
  },
  editDialog: {
    position: "absolute !important" as any,
    right: "30px !important" as any,
    inset: "unset !important" as any,
    bottom: "-20px !important" as any,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    backgroundColor: "white",

    "& .MuiDialogContent-root": {
      padding: "15px 25px",
      width: 130,
      textAlign: "center",
      color: "#636363",
    },

    "& .MuiDialog-paper": {
      borderRadius: 10,
      margin: 0,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
    },
  },
  editDialogContent: {
    "& hr": {
      marginTop: 15,
    },
  },
  editDialogView: {
    fontSize: 14,
    display: "inline-block",
    color: "#636363",
    transition: ".2s all ease-in",
    fontFamily: "Roboto, sans-serif",

    "&:hover": {
      color: "black",
    },
  },
  editDialogButton: {
    background: "none",
    border: "none",
    fontSize: 14,
    marginTop: 15,
    cursor: "pointer",
    color: "#636363",
    transition: ".2s all ease-in",
    display: "inline-block",

    "&:hover": {
      color: "black",
    },
  },
  deleteIcon: {
    cursor: "pointer",
    width: 24,
    height: 24,
  },
}));

export default useStyles;
