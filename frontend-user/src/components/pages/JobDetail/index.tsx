import { Box, Skeleton, Theme, Tooltip, useTheme } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  MAPPING_CATEGORY_TYPE_TEXT,
  MAPPING_LEVEL_TYPE_TEXT,
  MAPPING_LOCATION_TYPE_TEXT,
} from "../../../constants";
import { getJobDetail } from "../../../requests/jobs";
import { useCommonStyle } from "../../../styles";
import DefaultLayout from "../../layouts/DefaultLayout";
import FormApplication from "./FormApplication";
import ModalApplication from "./ModalApplication";
import useStyles from "./styles";

export type SocialProps = {
  url: string;
  imgUrl: string;
  imgHoverUrl: string;
  label: string;
};

export const socialData: Array<SocialProps> = [
  {
    url: "https://web.telegram.org/",
    imgUrl: "/images/socials/telegram.svg",
    imgHoverUrl: "/images/socials/telegram-blue.svg",
    label: "Telegram",
  },
  {
    url: "https://twitter.com/",
    imgUrl: "/images/socials/twitter.svg",
    imgHoverUrl: "/images/socials/twitter-blue.svg",
    label: "Twitter",
  },
  {
    url: "https://www.linkedin.com/",
    imgUrl: "/images/socials/linkedin.svg",
    imgHoverUrl: "/images/socials/linkedin-blue.svg",
    label: "Linkedin",
  },
  {
    url: "https://www.facebook.com/",
    imgUrl: "/images/socials/facebook.svg",
    imgHoverUrl: "/images/socials/facebook-blue.svg",
    label: "Facebook",
  },
];

const JobDetail: FunctionComponent = () => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const theme: Theme = useTheme();
  const mainColor: string = theme.palette.primary.main;
  const params = useParams();
  const id = params?.jobId;
  const socialsLength = socialData.length;
  const [hover, setHover] = useState<Array<boolean>>(
    new Array(socialsLength).fill(false)
  );
  const [openModalApplied, setOpenModalApplied] = useState<boolean>(false);
  const [jobDetail, setJobDetail] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  // const [loadingOther, setLoadingOther] = useState<boolean>(false);
  // const [otherJobs, setOtherJobs] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getJobDetail(+id);
        setLoading(false);
        if (res?.status === 200) {
          setJobDetail(res?.data?.data);
        } else {
          toast.error("Fail!");
        }
      } catch (error: any) {
        console.log("ERROR: ", error);
        toast.error(error?.response?.data?.message || "Load Job Detail fail");
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  // useEffect(() => {
  //   if (!jobDetail) return;
  //   // setLoadingOther(true);
  //   const getJobOther = async () => {
  //     try {
  //       const queryParams = {
  //         page: 1,
  //         category: jobDetail.category,
  //       };
  //       const res = await getListJob(queryParams);
  //       // setLoadingOther(false);
  //       if (res?.status === 200) {
  //         const others = res?.data?.data?.data
  //           ?.filter((item: any) => item.id !== jobDetail.id)
  //           .slice(0, 4);
  //         setOtherJobs(others);
  //       } else {
  //         toast.error("Fail!");
  //       }
  //     } catch (error: any) {
  //       console.log("ERROR: ", error);
  //       toast.error(error?.response?.data?.message || "Load Other Jobs fail");
  //       // setLoadingOther(false);
  //     }
  //   };
  //   getJobOther();
  // }, [jobDetail]);

  const onHoverSocialItem = (index: number) => {
    setHover((prevState: any) => {
      let newHover = [...prevState];
      newHover[index] = true;
      return newHover;
    });
  };
  const onLeaveSocialItem = (index: number) => {
    setHover((prevState: any) => {
      let newHover = [...prevState];
      newHover[index] = false;
      return newHover;
    });
  };

  const handleOpenModalApplied = () => {
    setOpenModalApplied(true);
  };

  const handleCloseModalApplied = () => {
    setOpenModalApplied(false);
  };

  const onCopyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied to clipboard", {
      theme: "dark",
      progressStyle: { background: mainColor },
      // bodyStyle: { color: mainColor },
    });
  };

  // const handleViewJobDetail = (jobId: number) => {
  //   window.open(`${window.location.origin}#/jobs/${jobId}`, "_blank");
  // };

  const renderSkeletonTextLong = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 2 }}>
        <Skeleton className={commonStyles.skeleton} height={28} width="100%" />
        <Skeleton className={commonStyles.skeleton} height={28} width="100%" />
        <Skeleton className={commonStyles.skeleton} height={28} width="50%" />
      </Box>
    );
  };

  const renderHeaderSkeleton = () => {
    return (
      <div className={styles.jobDetailHeader}>
        <Skeleton className={commonStyles.skeleton} height={48} width="200px" />
        <Skeleton className={commonStyles.skeleton} height={52} width="50%" />
        <Box
          width="50%"
          sx={{ display: "flex", gap: 2, justifyContent: "center" }}
        >
          <Skeleton className={commonStyles.skeleton} height={42} width="20%" />
          <Skeleton className={commonStyles.skeleton} height={42} width="20%" />
        </Box>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <div className={styles.jobDetail}>
        <div className={commonStyles.section}>
          <div className={styles.jobDetailContainer}>
            {loading ? (
              renderHeaderSkeleton()
            ) : (
              <div className={styles.jobDetailHeader}>
                <div className="jobDetail-type">
                  {jobDetail.category
                    ? MAPPING_CATEGORY_TYPE_TEXT[jobDetail.category]
                    : "N/A"}
                </div>
                <p className="jobDetail-title">{jobDetail?.title || "N/A"}</p>
                <div className="jobDetail-info">
                  <span className="job-rank">
                    {jobDetail.level
                      ? MAPPING_LEVEL_TYPE_TEXT[jobDetail.level]
                      : "N/A"}
                  </span>
                  <div className="job-location">
                    <img src="/images/icon-location.svg" alt="" />
                    <span>
                      {jobDetail.level
                        ? MAPPING_LOCATION_TYPE_TEXT[jobDetail.location]
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.jobDetailBody}>
              <div className={styles.socials}>
                {socialData.map((item: SocialProps, index: number) => (
                  <Tooltip
                    key={index}
                    title={item?.label}
                    arrow
                    placement="right"
                  >
                    <a
                      href={item?.url}
                      className={styles.socialItem}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => onHoverSocialItem(index)}
                      onMouseLeave={() => onLeaveSocialItem(index)}
                    >
                      <img
                        src={hover[index] ? item?.imgHoverUrl : item?.imgUrl}
                        alt=""
                      />
                    </a>
                  </Tooltip>
                ))}
                <Tooltip title="Copy" arrow placement="right">
                  <div
                    className={styles.socialItem}
                    onMouseEnter={() => onHoverSocialItem(socialsLength)}
                    onMouseLeave={() => onLeaveSocialItem(socialsLength)}
                    onClick={onCopyToClipboard}
                  >
                    <img
                      src={
                        hover[socialsLength]
                          ? "/images/icon-link-blue.svg"
                          : "/images/icon-link.svg"
                      }
                      alt=""
                    />
                  </div>
                </Tooltip>
              </div>

              <div className={styles.jobDetailWrap}>
                <div className={styles.groupJobDetail}>
                  <div className={styles.jobContent}>
                    <div className="content-group">
                      <p className="content-title">DESCRIPTION</p>
                      {loading ? (
                        renderSkeletonTextLong()
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: jobDetail?.description,
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="content-group">
                      <p className="content-title">REQUIREMENTS</p>
                      {loading ? (
                        renderSkeletonTextLong()
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: jobDetail?.requirements,
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="content-group">
                      <p className="content-title">BENEFITS</p>
                      {loading ? (
                        renderSkeletonTextLong()
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: jobDetail?.benefits,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>

                  <FormApplication
                    handleApply={handleOpenModalApplied}
                    jobTitle={jobDetail?.title}
                  />
                </div>

                {/* <div className={styles.jobsOther}>
                  <p className="other-title">Other</p>
                  <div className="other-container">
                    {otherJobs?.map((job: any, index: number) => {
                      return (
                        <div className={styles.otherCard} key={index}>
                          <span className="job-title">
                            {job?.title || "N/A"}
                          </span>
                          <div className="job-info">
                            <div className="group-info">
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
                            <ButtonMedium
                              text="View more"
                              className={styles.btnViewMoreMobile}
                              onClick={() => handleViewJobDetail(job?.id)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div> */}
              </div>

              <ModalApplication
                open={openModalApplied}
                handleClose={handleCloseModalApplied}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default JobDetail;
