import React from "react";
import useStyles from "./styles";

const MainDefaultLayout = (props: any) => {
  const styles = useStyles();
  return <div className={styles.mainLayout}>{props.children}</div>;
};

export default MainDefaultLayout;
