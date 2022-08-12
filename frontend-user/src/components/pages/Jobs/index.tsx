import { Pagination, PaginationItem } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useCommonStyle } from "../../../styles";
import ListJob from "../../base/ListJob";
import DefaultLayout from "../../layouts/DefaultLayout";
import useStyles from "./styles";

const fakeJobs: any = [];
for (let i = 0; i < 10; i++) {
  fakeJobs.push({
    jobId: i + 1,
    jobName: "Front-End Developper (Reactjs/Vuejs)",
    rank: "Junior",
    location: "Ha Noi",
  });
}

const Jobs: FunctionComponent = () => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(false);
    setTotalPage(1);
  }, []);

  const renderPagination = () => {
    if (totalPage <= 1) return <></>;

    return (
      <Pagination
        count={totalPage}
        className={styles.pagination}
        onChange={(e: any, value: any) => {
          if (!loading) {
            setCurrentPage(value);
          }
        }}
        page={currentPage}
        renderItem={(item: any) => (
          <PaginationItem
            className="pagination-item"
            components={{
              previous: () => <img src="/images/icon-previous.svg" alt="" />,
              next: () => <img src="/images/icon-next.svg" alt="" />,
            }}
            {...item}
          />
        )}
      />
    );
  };

  return (
    <DefaultLayout>
      <div className={styles.jobs}>
        <div className={commonStyles.section}>
          <div className={styles.jobsContainer}>
            <p className="jobs-title">Job Opportunities</p>
            <ListJob listJob={fakeJobs} />
            {renderPagination()}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Jobs;
