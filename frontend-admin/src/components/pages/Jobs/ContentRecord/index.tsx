import { Button, TableCell, TableRow, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  MAPPING_CATEGORY_TYPE_TEXT,
  MAPPING_LEVEL_TYPE_TEXT,
} from "../../../../constants";
import useStyles from "./style";

export type JobDetailProps = {
  id: string;
  title: string;
  category: string;
  level: string;
  status: boolean;
  createdDate: string;
};

type ContentRecordProps = {
  record: JobDetailProps;
};

const ContentRecord: React.FC<ContentRecordProps> = (
  props: ContentRecordProps
) => {
  const { record } = props;
  const classes = useStyles();

  return (
    <TableRow
      className={classes.tableRow}
      key={record.id}
      component={Link}
      to={`${record.id}`}
    >
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        <Tooltip title={<p style={{ fontSize: 15 }}>{record?.title}</p>}>
          <b className={classes.wordBreak}>{record?.title}</b>
        </Tooltip>
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        <span>{record?.createdDate}</span>
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {MAPPING_CATEGORY_TYPE_TEXT[record?.category]}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {MAPPING_LEVEL_TYPE_TEXT[record?.level]}
      </TableCell>
      <TableCell className={classes.tableCellTitle} component="td" scope="row">
        {!!record?.status ? "Display" : "Hidden"}
      </TableCell>

      <TableCell
        className={classes.tableCell}
        component="td"
        scope="row"
        // align="left"
      >
        <Button variant="contained" color="secondary">
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ContentRecord;
