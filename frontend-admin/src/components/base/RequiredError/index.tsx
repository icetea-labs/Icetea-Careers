import React from "react";
import useStyles from "./styles";

const RequiredError = () => {
  const styles = useStyles();

  return <div className={styles.error}>Field is required</div>;
};

export default RequiredError;
