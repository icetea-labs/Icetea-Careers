import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerRight: {
    display: "flex",
  },
  tableContainer: {
    padding: "30px 20px",
    borderRadius: 10,
    boxShadow: "none",
    marginTop: 25,
  },
  table: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
    backgroundColor: "white",
  },
  tableHeader: {
    padding: "0px 0px 25px 30px",
    color: "#363636",
    fontWeight: 600,
    "&:last-child": {
      width: 120,
      // textAlign: "right",
    },
  },
  tableBody: {
    "& > .MuiTableRow-root:last-child": {
      borderBottom: "1px solid #E5E5E5",
    },
    "& > .MuiTableRow-root:nth-child(odd)": {
      backgroundColor: "white",
    },
  },
  pagination: {
    marginTop: 30,
    fontSize: 12,
    fontWeight: 400,
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#FFCC00",
    },
  },
  skeleton: {
    padding: "25px 0px",
    marginTop: 10,
  },
  noDataMessage: {
    fontWeight: 500,
    marginTop: 30,
    textAlign: "center",
    fontSize: 15,
  },
  errorMessage: {
    fontWeight: 500,
    marginTop: 30,
    textAlign: "center",
    fontSize: 15,
    color: "red",
  },
  refreshCampaigns: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },
  refreshCampaignsContainer: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",

    "&:hover .refreshCampaignsIcon": {
      transform: "rotateZ(180deg)",
      fill: "#FFCC00",
    },
  },
  refreshCampaignsText: {
    marginLeft: 10,
    fontWeight: 500,
    fontSize: 15,
    transition: ".2s all ease-in",
    fontFamily: "Roboto-Medium",
    marginTop: 13,
  },
  refreshCampaignsIcon: {
    transition: ".2s all ease-in",
  },
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      width: 600,
    },
  },
  dialogContent: {
    padding: "8px 24px",
    overflowY: "initial",
  },
  dialogActions: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "8px 24px",
    marginTop: 15,

    "& > *:not(:last-child)": {
      marginRight: 5,
    },
  },
  dialogInput: {
    borderRadius: 5,
    border: "1px solid black",
    padding: "10px",
    transition: ".1s all ease-in",

    "&:focus": {
      borderColor: "#FFCC00",
      outline: "none",
    },
  },
  dialogLabel: {
    marginRight: 10,
    color: "#363636",
  },
  dialogButton: {
    textTransform: "inherit",
    backgroundColor: "#FFCC00",
    color: "white",
    fontWeight: 600,

    "&:hover": {
      backgroundColor: "#c29f15",
    },
  },
  dialogButtonCancel: {
    backgroundColor: "#e51d1d",

    "&:hover": {
      backgroundColor: "#a0033b",
    },
  },
}));

export default useStyles;
