import React from "react";
import { ButtonPropsType } from "..";
import useStyles from "./style";

const ButtonSmall: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
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
      {text}
    </button>
  );
};

export default ButtonSmall;
