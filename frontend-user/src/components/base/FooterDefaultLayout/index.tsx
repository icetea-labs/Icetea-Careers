import { Tooltip } from "@mui/material";
import { useState } from "react";
import useStyles from "./styles";

export type socialProps = {
  url: string;
  imgUrl: string;
  imgUrlHover: string;
  label: string;
};
export const socialData: Array<socialProps> = [
  {
    url: "/",
    imgUrl: "/images/socials/telegram-ann.svg",
    imgUrlHover: "/images/socials/annoucement-white.svg",
    label: "Telegram Annoucement",
  },
  {
    url: "/",
    imgUrl: "/images/socials/medium.svg",
    imgUrlHover: "/images/socials/medium-white.svg",
    label: "Medium",
  },
  {
    url: "/",
    imgUrl: "/images/socials/telegram.svg",
    imgUrlHover: "/images/socials/telegram-white.svg",
    label: "Telegram Official Group",
  },
  {
    url: "/",
    imgUrl: "/images/socials/discord.svg",
    imgUrlHover: "/images/socials/discord-white.svg",
    label: "Discord",
  },
  {
    url: "/",
    imgUrl: "/images/socials/twitter.svg",
    imgUrlHover: "/images/socials/twitter-white.svg",
    label: "Official Twitter",
  },
];

type FooterProps = {
  onScrollToRef: any;
};

const Footer = (props: FooterProps) => {
  const styles = useStyles();
  const { onScrollToRef } = props;
  const [hover, setHover] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onHoverSocialItem = (index: number) => {
    let newHover = [...hover];
    newHover[index] = true;
    setHover(newHover);
  };
  const onLeaveSocialItem = (index: number) => {
    let newHover = [...hover];
    newHover[index] = false;
    setHover(newHover);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerContainer}>
          <div className={styles.socials}>
            <img src="/images/logo-text.svg" className={styles.logo} alt="" />
            <p className="description">
              Follow us on Firebird official groups and channels so you won’t
              miss anything!
            </p>
            <div className={styles.socialList}>
              {socialData.map((item: socialProps, index: number) => (
                <Tooltip
                  key={index}
                  // classes={{ tooltip: styles.tooltip }}
                  title={item?.label}
                  arrow
                  placement="top"
                >
                  <a
                    href={item?.url}
                    className={styles.socialItem}
                    onMouseEnter={() => onHoverSocialItem(index)}
                    onMouseLeave={() => onLeaveSocialItem(index)}
                  >
                    <img
                      src={hover[index] ? item?.imgUrlHover : item?.imgUrl}
                      alt=""
                    />
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.navigationGroup}>
              <p className="group-label">BUY PKF</p>
              <a href="/" className={styles.navigationItem}>
                Uniswap
              </a>
              <a href="/" className={styles.navigationItem}>
                Gate.io
              </a>
              <a href="/" className={styles.navigationItem}>
                Ascendex
              </a>
              <a href="/" className={styles.navigationItem}>
                Kucoin
              </a>
            </div>
            <div className={styles.navigationGroup}>
              <p className="group-label">SITEMAP</p>
              <div
                onClick={() => onScrollToRef("about")}
                className={styles.navigationItem}
              >
                About Firebird
              </div>
              <div
                onClick={() => onScrollToRef("features")}
                className={styles.navigationItem}
              >
                Features
              </div>
              <div
                onClick={() => onScrollToRef("usecase")}
                className={styles.navigationItem}
              >
                Use cases
              </div>
              <div
                onClick={() => onScrollToRef("overview")}
                className={styles.navigationItem}
              >
                Overview
              </div>
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
