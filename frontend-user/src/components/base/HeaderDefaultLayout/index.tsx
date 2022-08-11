import { socialData, socialProps } from "../FooterDefaultLayout";
import useStyles from "./styles";

const HeaderDefaultLayout = (props: any) => {
  const styles = useStyles();

  const renderHeader = () => {
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
          {socialData?.map((item: socialProps, index: number) => (
            <a
              key={index}
              href={item?.url}
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <img src={item?.imgUrl} alt="" />
            </a>
          ))}
        </div>
      </div>
    );
  };

  const renderHeaderMobile = () => {
    return (
      <div className={styles.headerMobile}>
        <img
          src="/images/logo-text-horizontal-white.svg"
          className="header-logo"
          alt=""
        />
        <img src="/images/toggle-header.svg" className="header-toggle" alt="" />
      </div>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderHeaderMobile()}
    </>
  );
};

export default HeaderDefaultLayout;
