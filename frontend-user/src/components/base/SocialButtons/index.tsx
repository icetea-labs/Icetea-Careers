import React from "react";
import useStyles from "./style";

export type SocialProps = {
  url: string;
  imgUrl: string;
  label: string;
};
export const socialData: Array<SocialProps> = [
  {
    url: "https://www.facebook.com/IceteaLabsCareers",
    imgUrl: "/images/socials/facebook-color.svg",
    label: "Facebook",
  },
  {
    url: "https://www.linkedin.com/company/icetea-labs/",
    imgUrl: "/images/socials/linkedin-color.svg",
    label: "Linkedin",
  },
];

const SocialButtons = (props: any) => {
  const styles = useStyles();

  return (
    <div className={styles.buttons}>
      {socialData?.map((item: SocialProps, index: number) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className={styles.swipeButton}
        >
          {item.label}
          <img src={item.imgUrl} alt="" />
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
