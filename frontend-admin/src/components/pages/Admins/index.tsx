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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteAdmin, getListAdmin } from "../../../requests/admin";
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

const Admins = () => {
  const classes = useStyles();
  const commonStyles = useCommonStyle();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [idDelete, setIdDelete] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [dataAdmins, setDataAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      setLoading(true);
      try {
        let res = await getListAdmin();
        setLoading(false);
        if (res?.status === 200) {
          const { lastPage, data } = res.data?.data;
          setTotalPage(lastPage);
          setDataAdmins(data);
        } else {
          toast.error("Load list Admin fail");
        }
      } catch (error: any) {
        setLoading(false);
        toast.error(error?.message || "Load list Admin fail");
      }
    };

    fetchAdmins();
  }, []);

  const handlePaginationChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  const onConfirmDelete = async () => {
    setDeleteLoading(true);
    try {
      const response: any = await deleteAdmin(idDelete);
      setDeleteLoading(false);
      if (response?.status === 200) {
        toast.success("Delete Admin Successful!");
        window.location.reload();
      } else {
        toast.error("Delete Admin Fail!");
      }
    } catch (error: any) {
      toast.error(error.message || "Delete Admin Fail!");
      setDeleteLoading(false);
    }
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
              {dataAdmins &&
                dataAdmins.length > 0 &&
                dataAdmins.map((admin: AdminProps) => (
                  <ContentRecord
                    key={admin.id}
                    record={admin}
                    openConfirmDelete={openConfirmDelete}
                  />
                ))}
            </TableBody>
          </Table>
        )}
        {(!dataAdmins || dataAdmins.length === 0) && !loading ? (
          <p className={classes.noDataMessage}>There is no data</p>
        ) : (
          <>
            {dataAdmins && totalPage > 1 && (
              <Pagination
                page={currentPage}
                className={classes.pagination}
                count={totalPage}
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
            color="error"
            variant="outlined"
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
            variant="outlined"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </DefaultLayout>
  );
};

export default Admins;
