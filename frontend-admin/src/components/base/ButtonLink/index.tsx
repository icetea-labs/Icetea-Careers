import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";

type IButton = {
  text: string;
  icon?: any;
  to: string | any;
  spacing?: number;
  className?: string;
  onClick?: any;
  children?: JSX.Element | React.ReactNode;
};

const ButtonLink: React.FC<IButton> = (props: IButton) => {
  const { text, icon, spacing = 10, to, className = "", onClick } = props;
  const classes = useStyles({
    spacing,
  });

  const cssClass = className || classes.button;

  return (
    <Link className={cssClass} {...(onClick && { onClick })} to={to}>
      {icon && <img src={`/images/${icon}`} alt="" />}
      <span className={classes.buttonText}>{text}</span>
    </Link>
  );
};

export default ButtonLink;
