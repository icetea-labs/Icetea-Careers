import { Box, Skeleton } from "@mui/material";
import { memo, useCallback, useState } from "react";
import {
  categories,
  HIGH_SPEED,
  MAPPING_LOCATION_TYPE_TEXT,
} from "../../../constants";
import { useCommonStyle } from "../../../styles";
import { FilterProps } from "../../pages/Jobs";
import useStyles from "./styles";

type JobType = {
  label: (typeof categories)[number]["label"];
  value: (typeof categories)[number]["value"];
};

interface Job {
  id: string | number;
  title: string;
  level: string;
  location: keyof typeof MAPPING_LOCATION_TYPE_TEXT;
}

type JobOpportunitiesType = {
  listJob: Array<Job>;
  filter: FilterProps;
  loading?: boolean;
  defaultNav?: JobType["value"];
  handleChangeFilter: (newFilter: FilterProps) => void;
};

const JobCard = memo(({ job }: { job: Job }) => {
  const styles = useStyles();

  return (
    <div
      className={styles.jobCard}
      data-aos="zoom-in"
      data-aos-duration={HIGH_SPEED}
    >
      <p className="job-title">{job?.title || "N/A"}</p>
      <div className="job-level">
        {job?.level?.split(";").map((item) => (
          <span key={item} className="job-level-item">
            {item}
          </span>
        ))}
      </div>
      <div className={styles.cardBottom}>
        <div className="job-location">
          <span>
            {job.location ? MAPPING_LOCATION_TYPE_TEXT[job.location] : "N/A"}
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
});

const LoadingSkeleton = memo(() => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={styles.jobSkeleton}>
      {new Array(3).fill(0).map((_, index) => (
        <div className={styles.skeletonItem} key={index}>
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
});

const ListJob = (props: JobOpportunitiesType) => {
  const styles = useStyles();
  const {
    listJob = [],
    filter,
    handleChangeFilter,
    loading = false,
    defaultNav,
  } = props;

  const [navValue, setNavValue] = useState<JobType["value"] | undefined>(
    defaultNav
  );

  const handleChangeNav = useCallback(
    (value: JobType["value"]) => {
      if (value === navValue) return;
      setNavValue(value);
      handleChangeFilter({
        ...filter,
        category: value,
      });
    },
    [navValue, filter, handleChangeFilter]
  );

  return (
    <div className={styles.container}>
      <div className={styles.jobsNav} id="nav">
        {categories.map((item: JobType) => (
          <div
            key={item.value}
            className={`nav-item ${
              navValue === item.value ? "nav-actived" : ""
            }`}
            onClick={() => handleChangeNav(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : !listJob?.length ? (
        <div className={styles.listEmpty}>
          Sorry, but nothing matched your search terms!
        </div>
      ) : (
        <div className={styles.jobsList}>
          {listJob.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ListJob);
