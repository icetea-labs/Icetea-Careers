import { useState } from "react";
import { socialData, socialProps } from "../FooterDefaultLayout";
import useStyles from "./styles";

type HeaderProps = {
  onScrollToRef?: any;
};

type MenuItemProps = {
  label: string;
  value: "jobs" | "process" | "offer" | "contact";
};

const menu: Array<MenuItemProps> = [
  { label: "List job", value: "jobs" },
  { label: "Process", value: "process" },
  { label: "What we offer", value: "offer" },
  { label: "Contact us", value: "contact" },
];

const HeaderLandingLayout = (props: HeaderProps) => {
  const { onScrollToRef } = props;
  const styles = useStyles();
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const onClickMenuItemMobile = (name: string) => {
    setOpenPopup(false);
    onScrollToRef(name);
  };

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
        <div className={styles.headerMenu}>
          {menu.map((item: MenuItemProps, index: number) => (
            <div
              key={index}
              className="menu-item"
              onClick={() => onScrollToRef(item?.value)}
            >
              {item?.label}
            </div>
          ))}
        </div>
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
        <img
          src="/images/toggle-header.svg"
          className="header-toggle"
          alt=""
          onClick={() => setOpenPopup(true)}
        />

        <div
          className={styles.headerMobilePopup}
          style={{ display: openPopup ? "block" : "none" }}
        >
          <div className="popup-header">
            <img
              src="/images/logo.svg"
              className="header-logo"
              alt=""
              onClick={() => {
                setOpenPopup(false);
              }}
            />
            <img
              src="/images/icon-close.svg"
              className="header-close"
              alt=""
              onClick={() => setOpenPopup(false)}
            />
          </div>
          <div className="popup-navigation">
            {menu.map((item: MenuItemProps, index: number) => (
              <div
                key={index}
                className="popup-navigation-item"
                onClick={() => onClickMenuItemMobile(item?.value)}
              >
                {item?.label}
              </div>
            ))}
            <div className={styles.socials}>
              {socialData?.map((item: socialProps, index: number) => (
                <a key={index} href={item?.url} className={styles.socialItem}>
                  <img src={item?.imgUrl} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
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

export default HeaderLandingLayout;
