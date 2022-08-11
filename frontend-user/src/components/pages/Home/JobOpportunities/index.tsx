import { useNavigate } from "react-router-dom";
import { useCommonStyle } from "../../../../styles";
import { ButtonLarge } from "../../../base/Button";
import ListJob from "../../../base/ListJob";
import useStyles from "./styles";

const fakeJobs: any = [];
for (let i = 0; i < 5; i++) {
  fakeJobs.push({
    jobId: i + 1,
    jobName: "Front-End Developper (Reactjs/Vuejs)",
    rank: "Junior",
    location: "Ha Noi",
  });
}

const JobOpportunities = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const navigate = useNavigate();

  const onClickViewAll = () => {
    navigate("/jobs");
  };

  return (
    <div className={styles.jobs} ref={props.jobsRef}>
      <div className={commonStyles.section}>
        <div className={styles.jobsContainer}>
          <p className="jobs-title">Job Opportunities</p>
          <ListJob listJob={fakeJobs} />
          <div className={styles.btnViewAll}>
            <ButtonLarge text="View All" onClick={onClickViewAll} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
