import SocialButtons, { socialData, SocialProps } from "../SocialButtons";
import useStyles from "./styles";

const HeaderDefaultLayout = (props: any) => {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <a href="/">
        <img
          src="/images/logo-text-horizontal-white.svg"
          className="header-logo"
          alt=""
        />
      </a>

      <div className={styles.socialsHeader}>
        <SocialButtons />
      </div>
      <div className={styles.socialsHeaderMobile}>
        {socialData?.map((item: SocialProps, index: number) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className={styles.swipeButton}
          >
            <img src={item.imgUrl} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderDefaultLayout;
