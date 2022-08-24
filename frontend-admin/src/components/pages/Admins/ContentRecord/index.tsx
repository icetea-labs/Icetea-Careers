import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AdminProps } from "..";
import useStyles from "./style";

type ContentRecordProps = {
  record: AdminProps;
  openConfirmDelete: (id: number) => void;
};

const ContentRecord: React.FC<ContentRecordProps> = (
  props: ContentRecordProps
) => {
  const { record, openConfirmDelete } = props;
  const classes = useStyles();

  const openDeleteDialog = (e: any) => {
    e.preventDefault();
    openConfirmDelete(+record?.id);
  };

  return (
    <TableRow
      className={classes.tableRow}
      key={record.id}
      component={Link}
      to={`${record.id}`}
    >
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {record?.id}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {record?.username}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {record?.email}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {record?.name}
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        <span
          className={`admin-status ${
            record?.status ? "admin-active" : "admin-disable"
          }`}
        ></span>
        {record?.status ? "Actived" : "Disabled"}
      </TableCell>

      <TableCell className={classes.tableCell} component="td" scope="row">
        <div className="group-button">
          <Button variant="contained" color="info">
            <EditIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={(e: any) => openDeleteDialog(e)}
          >
            <DeleteIcon />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ContentRecord;
