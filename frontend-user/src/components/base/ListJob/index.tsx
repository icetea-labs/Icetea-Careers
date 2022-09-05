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
// @ts-ignore
import AOS from "aos";

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
    AOS.refresh();
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
      <div className={styles.jobsNav}>
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
            ? listJob.map((job: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={styles.jobCard}
                    data-aos={COMPONENT_ANIMATED}
                    data-aos-duration={NORMAL_SPEED}
                  >
                    <div className={styles.jobDetail}>
                      <p className="job-title">{job?.title || "N/A"}</p>
                      <div className="job-info">
                        <span className="job-rank">
                          {job.level
                            ? MAPPING_LEVEL_TYPE_TEXT[job.level]
                            : "N/A"}
                        </span>
                        <div className="job-location">
                          <img src="/images/icon-location.svg" alt="" />
                          <span>
                            {job.location
                              ? MAPPING_LOCATION_TYPE_TEXT[job.location]
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ButtonMedium
                      text="View more"
                      className={styles.btnViewMoreMobile}
                      onClick={() => handleViewJobDetail(job?.id)}
                    />
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
