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
  filter: {
    display: "flex",
    gap: 24,
    width: "100%",
    marginTop: 40,
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
}));

export default useStyles;
