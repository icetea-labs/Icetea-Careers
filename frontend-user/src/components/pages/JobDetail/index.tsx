import { FunctionComponent, useEffect } from "react";
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

const JobDetail: FunctionComponent = () => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <DefaultLayout>
      <div className={styles.jobs}>
        <div className={commonStyles.section}>
          <div className={styles.jobsContainer}>
            <p className="jobs-title">Job Detail</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default JobDetail;
