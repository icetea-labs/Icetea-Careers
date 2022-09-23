import { Box, Skeleton } from "@mui/material";
import { useState } from "react";
import {
  categories,
  CATEGORY_TYPE,
  HIGH_SPEED,
  MAPPING_LOCATION_TYPE_TEXT
} from "../../../constants";
import { useCommonStyle } from "../../../styles";
import { FilterProps } from "../../pages/Jobs";
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

  const handleChangeNav = (value: any) => {
    if (value === navValue) return;
    setNavValue(value);
    handleChangeFilter({
      ...filter,
      category: value,
    });
  };

  const renderEmpty = () => {
    return (
      <div className={styles.listEmpty}>
        Sorry, but nothing matched your search terms!
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className={styles.jobSkeleton}>
        {[...Array(9)].map((num, index) => (
          <div key={index} className={styles.skeletonItem}>
            <Skeleton
              className={commonStyles.skeleton}
              height={36}
              width="100%"
            />
            <Skeleton
              className={commonStyles.skeleton}
              height={36}
              width="100%"
            />
            <Box gap="20px" sx={{ display: "flex" }}>
              <Skeleton
                className={commonStyles.skeleton}
                height={28}
                width="100%"
              />
              <Skeleton
                className={commonStyles.skeleton}
                height={28}
                width="100%"
              />
            </Box>

            <Skeleton
              className={commonStyles.skeleton}
              sx={{ marginTop: "auto" }}
              height={28}
              width="47%"
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
      ) : listJob && listJob.length > 0 ? (
        <div className={styles.jobsList}>
          {listJob.map((job: any) => {
            return (
              <div
                key={job?.id}
                className={styles.jobCard}
                data-aos={listJob.length !== 1 && "zoom-in"}
                data-aos-duration={HIGH_SPEED}
              >
                <p className="job-title">{job?.title || "N/A"}</p>
                <div className="job-level">
                  {job?.level &&
                    job.level.split(";").map((item: any) => (
                      <span key={item} className="job-level-item">
                        {item}
                      </span>
                    ))}
                </div>
                <div className={styles.cardBottom}>
                  <div className="job-location">
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
          })}
        </div>
      ) : (
        renderEmpty()
      )}
    </div>
  );
};

export default ListJob;
