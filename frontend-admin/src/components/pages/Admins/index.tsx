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
import { deleteAdmin } from "../../../requests/admin";
import { useCommonStyle } from "../../../styles";
import ButtonLink from "../../base/ButtonLink";
import DefaultLayout from "../../layout/DefaultLayout";
import ContentRecord from "./ContentRecord";
import useStyles from "./styles";

const tableHeaders = ["ID", "Username", "Email", "Name", "Status", "Action"];

export type AdminProps = {
  id: string;
  name?: string;
  email: string;
  username: string;
  status: boolean;
};

const fakeAdmin: Array<AdminProps> = new Array(10)
  .fill(1)
  .map((item: any, index: number) => {
    return {
      id: "1" + index,
      status: !!(index % 2),
      username: "theforceht",
      email: "careers@icetea.io",
      name: "Icetea Careers",
    };
  });

const Admins = () => {
  const classes = useStyles();
  const commonStyles = useCommonStyle();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [idDelete, setIdDelete] = useState<number>(0);
  const loading = false;
  const admins: Array<AdminProps> = [...fakeAdmin];
  const lastPage = 100;

  const handlePaginationChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  const onConfirmDelete = async () => {
    setDeleteLoading(true);
    const response: any = await deleteAdmin(idDelete);
    setDeleteLoading(false);
    if (response?.status === 200) {
      toast.success("Delete Admin Successful!");
      window.location.reload();
    } else {
      toast.error("Delete Admin Fail!");
    }
    setDeleteLoading(false);
    setShowConfirmDelete(false);
  };

  const openConfirmDelete = (id: number) => {
    setShowConfirmDelete(true);
    setIdDelete(id);
  };

  return (
    <DefaultLayout>
      <div className={classes.header}>
        <div className="header-left">
          <ButtonLink
            to={"add"}
            text={"Create New Admin"}
            icon={"icon-plus.svg"}
          />
        </div>
      </div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        {loading ? (
          [...Array(10)].map((num, index) => (
            <div key={index}>
              <Skeleton className={commonStyles.skeleton} height={60} />
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
              {admins &&
                admins.length > 0 &&
                admins.map((admin: AdminProps) => (
                  <ContentRecord
                    key={admin.id}
                    record={admin}
                    openConfirmDelete={openConfirmDelete}
                  />
                ))}
            </TableBody>
          </Table>
        )}
        {(!admins || admins.length === 0) && !loading ? (
          <p className={classes.noDataMessage}>There is no data</p>
        ) : (
          <>
            {admins && lastPage > 1 && (
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

export default Admins;
