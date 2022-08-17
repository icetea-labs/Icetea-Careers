import React from "react";
import HeaderDefaultLayout from "../../base/HeaderDefaultLayout";
import useStyles from "./styles";

const NotFoundPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.notFoundLayout}>
      <HeaderDefaultLayout />
      <div className={styles.container}>
        <p className="title">404</p>
        <p className="sub-title">Page Not Found</p>
        <p className="detail">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
