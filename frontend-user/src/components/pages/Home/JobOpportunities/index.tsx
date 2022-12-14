import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CATEGORY_TYPE } from "../../../../constants";
import { getListJob } from "../../../../requests/jobs";
import { useCommonStyle } from "../../../../styles";
import { ButtonLarge } from "../../../base/Button";
import ListJob from "../../../base/ListJob";
import { FilterProps } from "../../Jobs";
import useStyles from "./styles";

const JobOpportunities = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const { search = "" } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [dataJobs, setDataJobs] = useState<any[]>([]);
  const [filter, setFilter] = useState<FilterProps>({
    page: 1,
    perPage: 9,
    search: "",
    category: CATEGORY_TYPE.SOFTWARE_DEVELOPMENT,
    display: true,
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
          setDataJobs(res?.data?.data?.data || []);
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
          search: search.trim(),
        };
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const onClickViewAll = () => {
    window.open(`${window.location.href}#/jobs`, "_self");
  };

  const handleChangeFilter = (newFilter: FilterProps) => {
    setFilter(newFilter);
  };

  return (
    <div className={styles.jobs} ref={props.jobsRef}>
      <div className={commonStyles.section}>
        <div className={styles.jobsContainer}>
          <p className="jobs-title">Job Opportunities</p>
          <ListJob
            listJob={dataJobs}
            filter={filter}
            loading={loading}
            handleChangeFilter={handleChangeFilter}
          />
          <div className={styles.btnViewAll}>
            <ButtonLarge text="View All Jobs" onClick={onClickViewAll} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
