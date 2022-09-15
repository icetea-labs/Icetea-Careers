import SocialButtons from "../SocialButtons";
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

      <SocialButtons />
    </div>
  );
};

export default HeaderDefaultLayout;
