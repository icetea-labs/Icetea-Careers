import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
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
import { categories, levels } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import { useCommonStyle } from "../../../styles";
import ButtonLink from "../../base/ButtonLink";
import DefaultLayout from "../../layout/DefaultLayout";
import ContentRecord, { JobDetailProps } from "./ContentRecord";
import useStyles from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { getListJob } from "../../../requests/job";

const tableHeaders = [
  "Job Title",
  "Created Date",
  "Category",
  "Level",
  "Status",
  "Detail",
];

export type FilterProps = {
  page: number;
  search: string;
  category: string;
  level: string;
  display: string;
};

const Jobs = () => {
  const classes = useStyles();
  const commonStyles = useCommonStyle();
  const [totalPage, setTotalPage] = useState<number>(0);
  const [dataJobs, setDataJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [filter, setFilter] = useState<FilterProps>({
    page: 1,
    search: "",
    category: "",
    level: "",
    display: "",
  });

  useEffect(() => {
    const getData = async () => {
      let queryParams = { ...filter };
      setLoading(true);
      try {
        const res = await getListJob(queryParams);
        setLoading(false);
        // console.log(res);
        if (res?.status === 200) {
          const dataRes = res?.data?.data || {};
          setDataJobs(dataRes?.data || []);
          setTotalPage(dataRes?.lastPage || 1);
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
          search: inputSearch,
        };
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [inputSearch]);

  const handlePaginationChange = (event: any, page: number) => {
    setFilter((prev) => {
      return {
        ...prev,
        page: page,
      };
    });
  };

  const handleSearch = (e: any) => {
    setInputSearch(e.target.value);
  };

  const handleSelectFilter = (e: any) => {
    setFilter((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
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
      <div className={classes.filter}>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="select-category">Category</InputLabel>
          <Select
            labelId="select-category"
            label="Category"
            name="category"
            value={filter.category}
            onChange={handleSelectFilter}
          >
            {categories.map((level: any, index: number) => {
              return (
                <MenuItem value={level.value} key={index}>
                  {level.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="select-level">Level</InputLabel>
          <Select
            labelId="select-level"
            label="Level"
            name="level"
            value={filter.level}
            onChange={handleSelectFilter}
          >
            {levels.map((level: any, index: number) => {
              return (
                <MenuItem value={level.value} key={index}>
                  {level.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="select-status">Status</InputLabel>
          <Select
            labelId="select-status"
            label="Status"
            name="display"
            value={filter.display}
            onChange={handleSelectFilter}
          >
            <MenuItem value={"true"}>Display</MenuItem>
            <MenuItem value={"false"}>Hidden</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ flex: 1 }} size="small" variant="outlined">
          <InputLabel htmlFor="input-search">Search</InputLabel>
          <OutlinedInput
            id="input-search"
            type="text"
            value={inputSearch}
            onChange={handleSearch}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
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
              {dataJobs &&
                dataJobs.length > 0 &&
                dataJobs.map((job: JobDetailProps) => (
                  <ContentRecord key={job.id} record={job} />
                ))}
            </TableBody>
          </Table>
        )}
        {(!dataJobs || dataJobs?.length === 0) && !loading ? (
          <p className={classes.noDataMessage}>There is no data</p>
        ) : (
          <>
            {dataJobs && totalPage > 1 && (
              <Pagination
                page={filter.page}
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
