import { Tooltip } from "@mui/material";
import { useState } from "react";
import { socialData, SocialProps } from "../FooterDefaultLayout";
import useStyles from "./styles";

const HeaderDefaultLayout = (props: any) => {
  const styles = useStyles();
  const [hover, setHover] = useState<Array<boolean>>([false, false]);

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

  return (
    <div className={styles.header}>
      <a href="/">
        <img
          src="/images/logo-text-horizontal-white.svg"
          className="header-logo"
          alt=""
        />
      </a>
      <div className={styles.socials}>
        {socialData?.map((item: SocialProps, index: number) => (
          <Tooltip key={index} title={item?.label} arrow placement="bottom">
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
      </div>
    </div>
  );
};

export default HeaderDefaultLayout;
