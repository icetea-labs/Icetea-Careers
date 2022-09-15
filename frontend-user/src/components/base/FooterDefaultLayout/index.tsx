import SocialButtons from "../SocialButtons";
import useStyles from "./styles";

type teamProps = {
  name: string;
  phone: string;
  telegram: string;
};

const team: Array<teamProps> = [
  {
    name: "Ms. Hong Anh",
    phone: "+84 38 646 3895",
    telegram: "@anhngo38",
  },
  {
    name: "Ms. Giang",
    phone: "+84 94 313 9421",
    telegram: "@PTHGiang2497",
  },
  {
    name: "Ms. Phuong",
    phone: "+84 39 344 4548",
    telegram: "@phoebehp",
  },
];

type FooterProps = {
  onScrollToRef?: any;
};

const Footer = (props: FooterProps) => {
  const styles = useStyles();
  const { onScrollToRef } = props;

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerContainer}>
          <div className={styles.socials}>
            <img
              src="/images/logo-text-horizontal-white.svg"
              className={styles.logo}
              alt=""
            />
            <p className="mail">ta@icetea.io</p>
            <p>+84 246 658 5248</p>
            <p className="description">
              11th Floor, IPH Tower, 241 Xuan Thuy Street, Cau Giay, Hanoi
            </p>

            <SocialButtons />
          </div>
          <div className={styles.navigation}>
            <div className={styles.navigationGroup}>
              <p className="group-label">ABOUT US</p>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className={styles.navigationItem}
              >
                Our services
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className={styles.navigationItem}
              >
                Blog
              </a>
            </div>
            <div className={styles.navigationGroup}>
              <p className="group-label">SITEMAP</p>
              <div
                onClick={() => onScrollToRef && onScrollToRef("jobs")}
                className={styles.navigationItem}
              >
                List Job
              </div>
              <div
                onClick={() => onScrollToRef && onScrollToRef("process")}
                className={styles.navigationItem}
              >
                Selection Process
              </div>
              <div
                onClick={() => onScrollToRef && onScrollToRef("offer")}
                className={styles.navigationItem}
              >
                What we offer
              </div>
            </div>
            <div className={styles.navigationGroup + " team-mobile"}>
              <p className="group-label">TALENT ACQUISITION TEAM</p>
              {team.map((hr: teamProps, index: number) => {
                return (
                  <div className="hr" key={index}>
                    <span className="hr-name">{hr?.name}</span>
                    <span>{hr?.phone}</span>
                    <div className="hr-tele">
                      <img src="/images/socials/telegram-white.svg" alt="" />
                      <span>{hr?.telegram || "N/A"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          Copyright © 2022 . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
