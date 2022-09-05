import { Pagination, PaginationItem } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getListJob } from "../../../requests/jobs";
import { useCommonStyle } from "../../../styles";
import ListJob from "../../base/ListJob";
import DefaultLayout from "../../layouts/DefaultLayout";
import useStyles from "./styles";

export type FilterProps = {
  page: number;
  search: string;
  category: string;
};

const Jobs: FunctionComponent = () => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataJobs, setDataJobs] = useState<any[]>([]);
  const [filter, setFilter] = useState<FilterProps>({
    page: 1,
    search: "",
    category: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      let queryParams = { ...filter };

      setLoading(true);
      try {
        const res = await getListJob(queryParams);
        setLoading(false);
        console.log(res);
        if (res?.status === 200) {
          setDataJobs(res?.data?.data?.data || []);
          setTotalPage(res?.data?.data?.lastPage || 1);
        } else {
          toast.error("Fail!");
        }
      } catch (error: any) {
        console.log("ERROR: ", error);
        toast.error(error?.response?.data?.message || "Load List Job fail");
        setLoading(false);
      }
    };
    getData();
  }, [filter]);

  const handleChangePage = (e: any, value: number) => {
    if (!loading) {
      setFilter((prevState: FilterProps) => {
        return { ...prevState, page: value };
      });
    }
  };
  const handleChangeFilter = (newFilter: FilterProps) => {
    setFilter(newFilter);
  };

  const renderPagination = () => {
    if (totalPage <= 1) return <></>;

    return (
      <Pagination
        count={totalPage}
        className={styles.pagination}
        onChange={handleChangePage}
        page={filter?.page || 1}
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
            <ListJob
              listJob={dataJobs}
              filter={filter}
              loading={loading}
              handleChangeFilter={handleChangeFilter}
            />
            {renderPagination()}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Jobs;
