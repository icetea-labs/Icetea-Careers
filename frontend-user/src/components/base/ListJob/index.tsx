import { Box, Skeleton } from "@mui/material";
import { useState } from "react";
import {
  categories,
  CATEGORY_TYPE,
  COMPONENT_ANIMATED,
  MAPPING_LEVEL_TYPE_TEXT,
  MAPPING_LOCATION_TYPE_TEXT,
  NORMAL_SPEED,
} from "../../../constants";
import { useCommonStyle } from "../../../styles";
import { FilterProps } from "../../pages/Jobs";
import { ButtonMedium } from "../Button";
import useStyles from "./styles";

type JobType = {
  label: typeof categories[number]["label"];
  value: typeof categories[number]["value"];
};

type JobOpportunitiesType = {
  listJob: Array<any>;
  filter: FilterProps;
  loading?: Boolean;
  handleChangeFilter: (newFilter: FilterProps) => void;
};

const ListJob = (props: JobOpportunitiesType) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const { listJob = [], filter, handleChangeFilter, loading = false } = props;

  const [navValue, setNavValue] = useState<JobType["value"]>(
    CATEGORY_TYPE.SOFTWARE_DEVELOPMENT
  );

  const handleViewJobDetail = (jobId: number) => {
    window.open(`${window.location.origin}#/jobs/${jobId}`, "_blank");
    // navigate("/jobs/" + jobId);
  };

  const handleChangeNav = (value: any) => {
    if (value === navValue) return;
    setNavValue(value);
    handleChangeFilter({
      ...filter,
      category: value,
    });
  };

  const renderEmpty = () => {
    return <div className={styles.listEmpty}>Please try again later!</div>;
  };

  const renderLoading = () => {
    return (
      <div className={styles.jobSkeleton}>
        {[...Array(5)].map((num, index) => (
          <div key={index} className={styles.skeletonItem}>
            <Box className={styles.boxSkeletonLeft}>
              <Skeleton
                className={commonStyles.skeleton}
                height={32}
                width="100%"
              />
              <Box
                gap="20px"
                sx={{
                  display: "flex",
                  marginTop: "auto",
                  maxWidth: 200,
                }}
              >
                <Skeleton
                  className={commonStyles.skeleton}
                  height={24}
                  width="100%"
                />

                <Skeleton
                  className={commonStyles.skeleton}
                  height={24}
                  width="100%"
                />
              </Box>
            </Box>
            <Skeleton
              className={commonStyles.skeleton}
              height={44}
              width={144}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.jobsNav} id="nav">
        {categories.map((item: JobType, index: number) => {
          return (
            <div
              key={index}
              className={`nav-item ${
                navValue === item.value ? "nav-actived" : ""
              }`}
              onClick={() => handleChangeNav(item.value)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      {loading ? (
        renderLoading()
      ) : (
        <div className={styles.jobsList}>
          {listJob && listJob.length > 0
            ? listJob.map((job: any) => {
                return (
                  <div
                    key={job.id}
                    className={styles.jobCard}
                    // data-aos={listJob.length !== 1 && COMPONENT_ANIMATED}
                    // data-aos-duration={NORMAL_SPEED}
                  >
                    <p className="job-title">{job?.title || "N/A"}</p>
                    <div className="job-level">
                      {job?.level &&
                        job.level
                          .split(";")
                          .map((item: any) => (
                            <span className="job-level-item">{item}</span>
                          ))}
                    </div>
                    <div className={styles.cardBottom}>
                      <div className="job-location">
                        <img src="/images/icon-location.svg" alt="" />
                        <span>
                          {job.location
                            ? MAPPING_LOCATION_TYPE_TEXT[job.location]
                            : "N/A"}
                        </span>
                      </div>
                      <a
                        href={`${window.location.origin}#/jobs/${job.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-view-more"
                      >
                        <span>Discover</span>
                        <img src="/images/icon-viewmore.svg" alt="" />
                      </a>
                    </div>
                  </div>
                );
              })
            : renderEmpty()}
        </div>
      )}
    </div>
  );
};

export default ListJob;
