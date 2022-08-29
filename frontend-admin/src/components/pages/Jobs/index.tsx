import {
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
import useFetch from "../../../hooks/useFetch";
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

const Jobs = () => {
  const classes = useStyles();
  const commonStyles = useCommonStyle();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const { data: dataJobs, error, loading } = useFetch<any>("jobs");

  useEffect(() => {
    if (!dataJobs && error) {
      toast.error(error || "Load list Job fail");
      return;
    }
    setTotalPage(dataJobs?.lastPage);
  }, [dataJobs, error]);

  const handlePaginationChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  return (
    <DefaultLayout>
      <div className={classes.header}>
        <div className="header-left">
          <ButtonLink
            to={"add"}
            text={"Create New JD"}
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
              {dataJobs?.data &&
                dataJobs.data.length > 0 &&
                dataJobs.data.map((job: JobDetailProps) => (
                  <ContentRecord key={job.id} record={job} />
                ))}
            </TableBody>
          </Table>
        )}
        {(!dataJobs || dataJobs.length === 0) && !loading ? (
          <p className={classes.noDataMessage}>There is no data</p>
        ) : (
          <>
            {dataJobs && totalPage > 1 && (
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
    </DefaultLayout>
  );
};

export default Jobs;
