import { useState } from "react";
import { COMPONENT_ANIMATED, HIGH_SPEED, NORMAL_SPEED } from "../../../../constants";
import { useCommonStyle } from "../../../../styles";
import { ButtonLarge, ButtonMedium } from "../../../base/Button";
import useStyles from "./styles";

type JobType = {
  label: "Software Development" | "Marketing" | "Design & Art" | "Operations";
  value: "development" | "marketing" | "design" | "operation";
};
const jobs: Array<JobType> = [
  {
    label: "Software Development",
    value: "development",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Design & Art",
    value: "design",
  },
  {
    label: "Operations",
    value: "operation",
  },
];
const fakeJob = {
  jobName: "Front-End Developper (Reactjs/Vuejs)",
  rank: "Junior",
  location: "Ha Noi",
};

const JobOpportunities = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const [navValue, setNavValue] = useState<
    "development" | "marketing" | "design" | "operation"
  >("development");

  return (
    <div className={styles.jobs} ref={props.jobsRef}>
      <div className={commonStyles.section}>
        <div className={styles.jobsContainer}>
          <p className="jobs-title">Job Opportunities</p>
          <div className={styles.jobsNav}>
            {jobs.map((item: JobType, index: number) => {
              return (
                <div
                  key={index}
                  className={`nav-item ${
                    navValue === item.value ? "nav-actived" : ""
                  }`}
                  onClick={() => {
                    setNavValue(item.value);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
          <div className={styles.jobsList}>
            {new Array(5).fill(fakeJob).map((job: any, index: number) => {
              return (
                <div
                  key={index}
                  className={styles.jobCard}
                  data-aos={COMPONENT_ANIMATED}
                  data-aos-duration={NORMAL_SPEED}
                >
                  <div className={styles.jobDetail}>
                    <p className="job-title">{job?.jobName}</p>
                    <div className="job-info">
                      <span className="job-rank">{job?.rank}</span>
                      <div className="job-location">
                        <img src="/images/icon-location.svg" alt="" />
                        <span>{job?.location}</span>
                      </div>
                    </div>
                  </div>
                  <ButtonMedium text="View more" />
                </div>
              );
            })}
          </div>
          <div className={styles.btnViewAll}>
            <ButtonLarge text="View All" />
          </div>
          {/* <div className={styles.btnDemo}>View Allllllllllllllllllllllll</div> */}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
