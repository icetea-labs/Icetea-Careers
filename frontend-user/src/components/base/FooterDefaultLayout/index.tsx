import SocialButtons from "../SocialButtons";
import useStyles from "./styles";

type teamProps = {
  name: string;
  phone: string;
  telegram: string;
};

const team: Array<teamProps> = [
  // {
  //   name: "Ms. Huong",
  //   phone: "+84 91 990 0925",
  //   telegram: "@huongthu510",
  // },
  {
    name: "Ms. Giang",
    phone: "+84 94 313 9421",
    telegram: "@PTHGiang2497",
  },
  {
    name: "Ms. Thuy",
    phone: "+84 88 662 6971",
    telegram: "@thuynguyen05",
  },
  {
    name: "Ms. Hoa",
    phone: "+84 97 208 3896",
    telegram: "@tieuhoa2308",
  },
];

type FooterProps = {
  onScrollToRef?: any;
};

const Footer = (props: FooterProps) => {
  const styles = useStyles();
  // const { onScrollToRef } = props;

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
            <p className="mail">recruitment@icetea.io</p>
            <p>+84 246 658 5248</p>
            <p className="description">
              11th Floor, IPH Tower, 241 Xuan Thuy Street, Cau Giay, Hanoi
            </p>

            <SocialButtons />
          </div>
          <div className={styles.talentTeam}>
            <span className="talent-label">TALENT ACQUISITION TEAM</span>
            <div className={styles.hrGroup}>
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
