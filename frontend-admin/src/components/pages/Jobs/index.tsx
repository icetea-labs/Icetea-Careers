import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Pagination,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { categories, levels } from "../../../constants";
import { useCommonStyle } from "../../../styles";
import ButtonLink from "../../base/ButtonLink";
import DefaultLayout from "../../layout/DefaultLayout";
import ContentRecord, { JobDetailProps } from "./ContentRecord";
import useStyles from "./styles";

const tableHeaders = [
  "Job Title",
  "Created Date",
  "Category",
  "Level",
  "Status",
  "Detail",
];

const fakeJobs: Array<JobDetailProps> = new Array(10)
  .fill(1)
  .map((item: any, index: number) => {
    return {
      id: index + "0",
      category: categories[index % 4].value,
      createdDate: "22/08/2022 04:30 PM",
      level: levels[index % 5].value,
      status: true,
      title: "Front-End Developper (Reactjs/Vuejs)",
    };
  });
const Jobs = () => {
  const classes = useStyles();
  const commonStyles = useCommonStyle();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const loading = false;
  const jobs: Array<JobDetailProps> = [...fakeJobs];
  const lastPage = 100;

  const handlePaginationChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  const onConfirmDelete = async () => {
    setDeleteLoading(true);
    const response = { status: 200 };
    // const response = await deleteEventContent(idDelete);
    if (response?.status === 200) {
      toast.success("Successful");
      window.location.reload();
    } else {
      toast.error("Fail");
    }
    setDeleteLoading(false);
    setShowConfirmDelete(false);
  };
  return (
    <DefaultLayout>
      <div className={classes.header}>
        <div className="header-left">
          <ButtonLink
            to={"add"}
            text={"Create New Event Content"}
            icon={"icon-plus.svg"}
          />
        </div>
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        {loading ? (
          [...Array(10)].map((num, index) => (
            <div key={index}>
              <Skeleton className={commonStyles.skeleton} height={40} />
            </div>
          ))
        ) : (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((tableHeader: string, index: number) => (
                  <TableCell key={index} className={classes.tableHeader}>
                    {tableHeader}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {jobs &&
                jobs.length > 0 &&
                jobs.map((job: JobDetailProps) => (
                  <ContentRecord key={job.id} record={job} />
                ))}
            </TableBody>
          </Table>
        )}
        {(!jobs || jobs.length === 0) && !loading ? (
          <p className={classes.noDataMessage}>There is no data</p>
        ) : (
          <>
            {jobs && lastPage > 1 && (
              <Pagination
                page={currentPage}
                className={classes.pagination}
                count={lastPage}
                onChange={handlePaginationChange}
              />
            )}
          </>
        )}
      </TableContainer>

      <Dialog
        open={showConfirmDelete}
        // TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogTitle id="form-dialog-title">Delete</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          Are you sure to Delete?
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.dialogButton}
            disabled={deleteLoading}
            onClick={onConfirmDelete}
            color="primary"
          >
            Submit
            {deleteLoading && (
              <CircularProgress size={25} style={{ marginLeft: 10 }} />
            )}
          </Button>
          <Button
            disabled={deleteLoading}
            className={`${classes.dialogButton} ${classes.dialogButtonCancel}`}
            onClick={() => setShowConfirmDelete(false)}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </DefaultLayout>
  );
};

export default Jobs;
