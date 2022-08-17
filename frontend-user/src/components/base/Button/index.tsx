import ButtonLarge from "./ButtonLarge";
import ButtonMedium from "./ButtonMedium";
import ButtonSmall from "./ButtonSmall";

export type ButtonPropsType = {
  text: string;
  onClick?: () => void;
  loading?: boolean;
  style?: {};
  className?: string;
  showIcon?: boolean;
};

export { ButtonLarge, ButtonMedium, ButtonSmall };
