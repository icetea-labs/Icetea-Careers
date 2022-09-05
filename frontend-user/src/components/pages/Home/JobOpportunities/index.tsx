import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getListJob } from "../../../../requests/jobs";
import { useCommonStyle } from "../../../../styles";
import { ButtonLarge } from "../../../base/Button";
import ListJob from "../../../base/ListJob";
import { FilterProps } from "../../Jobs";
import useStyles from "./styles";

const JobOpportunities = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  const [loading, setLoading] = useState<boolean>(false);
  const [dataJobs, setDataJobs] = useState<any[]>([]);
  const [filter, setFilter] = useState<FilterProps>({
    page: 1,
    search: "",
    category: "",
  });

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

  const onClickViewAll = () => {
    window.open(`${window.location.href}#/jobs`, "_blank");
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
            <ButtonLarge text="View All" onClick={onClickViewAll} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
