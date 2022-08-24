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
import { useState } from "react";
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
  const loading = false;
  const jobs: Array<JobDetailProps> = [...fakeJobs];
  const lastPage = 100;

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
    </DefaultLayout>
  );
};

export default Jobs;
