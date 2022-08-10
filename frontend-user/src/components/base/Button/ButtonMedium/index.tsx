import React from "react";
import { ButtonPropsType } from "..";
import useStyles from "./style";

const ButtonMedium: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  const styles = useStyles();
  const { style, text = "", onClick, loading = false, showIcon = true } = props;
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
      {showIcon && <img src="/images/icon-viewmore.svg" alt="" />}
    </button>
  );
};

export default ButtonMedium;
