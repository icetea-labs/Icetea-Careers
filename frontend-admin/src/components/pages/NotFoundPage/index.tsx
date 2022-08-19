import React from "react";
import useStyles from "./styles";

const NotFoundPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.notFoundLayout}>
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
