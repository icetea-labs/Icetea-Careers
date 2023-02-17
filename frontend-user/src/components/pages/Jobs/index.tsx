import { Pagination, PaginationItem } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CATEGORY_TYPE } from "../../../constants";
import { getListJob } from "../../../requests/jobs";
import { useCommonStyle } from "../../../styles";
import ListJob from "../../base/ListJob";
import DefaultLayout from "../../layouts/DefaultLayout";
import useStyles from "./styles";

export type FilterProps = {
  page: number;
  perPage?: number;
  search: string;
  category: typeof CATEGORY_TYPE[keyof typeof CATEGORY_TYPE];
  display: boolean;
};

const Jobs: FunctionComponent = () => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataJobs, setDataJobs] = useState<any[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [filter, setFilter] = useState<FilterProps>({
    page: 1,
    perPage: 15,
    search: "",
    category: "",
    display: true,
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
        // console.log(res);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter((prev) => {
        return {
          ...prev,
          search: inputSearch.trim(),
        };
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [inputSearch]);

  const onSearching = (e: any) => {
    setInputSearch(e.target.value);
  };

  const handleSearch = () => {
    // console.log("inputSearch", inputSearch);
  };

  const onKeyUp = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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

            <div className={styles.searchBar}>
              <div className="search-field">
                <img src="/images/icon-search.svg" alt="" />
                <input
                  type="text"
                  placeholder="Search job ..."
                  onKeyUp={onKeyUp}
                  value={inputSearch}
                  onChange={onSearching}
                  autoFocus
                />
              </div>
              <span className="search-btn" onClick={handleSearch}>
                Search
              </span>
            </div>

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
