import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COMPONENT_ANIMATED, NORMAL_SPEED } from "../../../constants";
import { useCommonStyle } from "../../../styles";
import { ButtonMedium } from "../Button";
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

type JobOpportunitiesType = {
  listJob: Array<any>;
};

const ListJob = (props: JobOpportunitiesType) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { listJob = [] } = props;

  const [navValue, setNavValue] = useState<
    "development" | "marketing" | "design" | "operation"
  >("development");

  const handleViewJobDetail = (jobId: number) => {
    navigate("/jobs/" + jobId);
  };

  return (
    <div className={styles.container}>
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
        {listJob?.map((job: any, index: number) => {
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
              <ButtonMedium
                text="View more"
                onClick={() => handleViewJobDetail(job?.jobId)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListJob;
