import React from "react";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const nav = [
  {
    title: "Home",
    part: "/home",
    icon: "icon-home",
  },
  {
    title: "List Jobs",
    part: "/jobs",
    icon: "icon-list-campaign",
  },
  {
    title: "List Admins",
    part: "/admins",
    icon: "icon-users",
  },
];

const NavLeft = (props: any) => {
  const styles = useStyles();
  const { smallLeft } = props;
  const [navLeft] = React.useState(nav);
  const location = useLocation();

  const logoutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("Do you want logout?")) {
      return false;
    }

    // logout
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <ul className={styles.navLeft}>
      {navLeft.map((item, index) => {
        return (
          <li
            key={index}
            className={
              styles.itemNavLeft +
              " " +
              (location?.pathname === item.part && "active")
            }
          >
            <Link
              to={item.part}
              className={
                styles.linkItemNavLeft +
                " " +
                (location?.pathname === item.part && "active")
              }
            >
              <i
                className={(smallLeft && " icon-small") + " icon " + item.icon}
              ></i>
              {!smallLeft && item.title}
            </Link>
          </li>
        );
      })}

      <li className={styles.itemNavLeft}>
        <div onClick={logoutUser} className={styles.linkItemNavLeft}>
          <i
            className={(smallLeft && " icon-small") + " icon icon-setting"}
          ></i>
          {!smallLeft && "Logout"}
        </div>
      </li>
    </ul>
  );
};

export default NavLeft;
