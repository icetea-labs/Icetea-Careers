import { Theme, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCommonStyle } from "../../../styles";
import { ButtonMedium } from "../../base/Button";
import { SocialProps } from "../../base/FooterDefaultLayout";
import DefaultLayout from "../../layouts/DefaultLayout";
import FormApplication from "./FormApplication";
import ModalApplication from "./ModalApplication";
import useStyles from "./styles";

const fakeJobs: any = [];
for (let i = 0; i < 4; i++) {
  fakeJobs.push({
    jobId: i + 1,
    jobName: "Front-End Developper (Reactjs/Vuejs)",
    rank: "Junior",
    location: "Ha Noi",
  });
}
const fakeDescription = `<p>Focus on developing user-interface components and implementing them following well-known React.js, Vue.js</p>`;
const fakeRequirements = `<p>At least 1 year of experience using React.js, Vue.js and related libraries such as Redux, Vuex...<br />Proficient in JavaScript, have good knowledge of HTML/CSS, AJAX<br />\nExperience in responsive web design and UI/UX optimization<br />\nExperience working with Restful API /GraphQL<br />\nExperience in using version management tools like Git<br />\nAnalytical and problem-solving skills<br />\nKnowledge or interest in blockchain is a plus<br />\nExperience in using: web.js ethers.js is a plus<br />\nRead and understand English documents</p>`;
const fakeBeneits = `<p>Competitive salary range (negotiable based on capacity)<br />\nLabor Contract and Social Insurance according to Vietnamese Law<br />\n12 annual leaves and other holidays as regulated by the State.<br />\n13th month salary<br />\nAttractive bonus policy (annual performance and salary review, project bonus, holiday and birthday bonus....)<br />\nLatest equipment and devices<br />\nLearning and Development space for training courses and self-learning<br />\nTea and coffee break with snack, team building, sports, esports, unlimited parties<br />\nA buzzing space full of globally influential technical founders and business establishing experts</p>\n\n<p>&nbsp;</p>`;

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
  // const params = useParams();
  // const id = params?.jobId;
  const socialsLength = socialData.length;
  const [hover, setHover] = useState<Array<boolean>>(
    new Array(socialsLength).fill(false)
  );
  const [openModalApplied, setOpenModalApplied] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

  const handleViewJobDetail = (jobId: number) => {
    window.open(`${window.location.origin}#/jobs/${jobId}`, "_blank");
  };

  return (
    <DefaultLayout>
      <div className={styles.jobDetail}>
        <div className={commonStyles.section}>
          <div className={styles.jobDetailContainer}>
            <div className={styles.jobDetailHeader}>
              <div className="jobDetail-type">Engineering & Technology</div>
              <p className="jobDetail-title">
                Front-end Developper (Reactjs/Vuejs)
              </p>
              <div className="jobDetail-info">
                <span className="job-rank">Junior</span>
                <div className="job-location">
                  <img src="/images/icon-location.svg" alt="" />
                  <span>Ha Noi</span>
                </div>
              </div>
            </div>
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
                      <div
                        dangerouslySetInnerHTML={{
                          __html: fakeDescription,
                        }}
                      ></div>
                    </div>
                    <div className="content-group">
                      <p className="content-title">REQUIREMENTS</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: fakeRequirements,
                        }}
                      ></div>
                    </div>
                    <div className="content-group">
                      <p className="content-title">BENEFITS</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: fakeBeneits,
                        }}
                      ></div>
                    </div>
                  </div>

                  <FormApplication handleApply={handleOpenModalApplied} />
                </div>

                <div className={styles.jobsOther}>
                  <p className="other-title">Other</p>
                  <div className="other-container">
                    {fakeJobs.map((job: any, index: number) => {
                      return (
                        <div className={styles.otherCard} key={index}>
                          <span className="job-title">{job?.jobName}</span>
                          <div className="job-info">
                            <div className="group-info">
                              <span className="job-rank">{job?.rank}</span>
                              <div className="job-location">
                                <img src="/images/icon-location.svg" alt="" />
                                <span>{job?.location}</span>
                              </div>
                            </div>
                            <ButtonMedium
                              text="View more"
                              className={styles.btnViewMoreMobile}
                              onClick={() => handleViewJobDetail(job?.jobId)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
