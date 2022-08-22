import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLeft from "./NavLeft";
import useStyles from "./styles";

const LeftDefaultLayout = (props: any) => {
  const styles = useStyles();
  const [smallLeft, setSmallLeft] = useState<boolean>(false);
  const loginUser: any = {};

  return (
    <div className={styles.leftLayout + " " + (smallLeft && styles.smallLeft)}>
      <div className={styles.headLeft}>
        <div className={styles.BoxInfoUser}>
          <Link to={"/profile"}>
            <img
              className={styles.avatar}
              src={"/images/logo-white.svg"}
              alt=""
            />
          </Link>
          {!smallLeft && (
            <div className={styles.infoUser}>
              <div className="name">{loginUser?.username || "Admin"}</div>
              <div className="status">
                Verified Profile
                <img
                  className="icon"
                  src={"/images/icon-verified.svg"}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <IconButton
          className={styles.btnSmallBig + " " + (smallLeft && "btnSmall")}
          onClick={() => setSmallLeft(!smallLeft)}
          color="inherit"
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </div>
      <NavLeft smallLeft={smallLeft} />

      {!smallLeft && (
        <div className={styles.Copyright}>
          Copyright @Icetea 2022. All rights reserved.
        </div>
      )}
    </div>
  );
};

export default LeftDefaultLayout;
