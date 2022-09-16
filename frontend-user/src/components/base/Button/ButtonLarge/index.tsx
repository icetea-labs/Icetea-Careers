import React from "react";
import { ButtonPropsType } from "..";
import useStyles from "./style";

const ButtonLarge: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  const styles = useStyles();
  const { style, text = "", onClick, loading = false } = props;
  const customStyle = {
    ...style,
  };

  return (
    <button
      style={customStyle}
      className={styles.button}
      disabled={loading}
      onClick={onClick}
    >
      <span>{text}</span>
      <img src="/images/icon-viewmore.svg" alt="" />
    </button>
  );
};

export default ButtonLarge;
