import React from "react";
import { useCommonStyle } from "../../../styles";
import HeaderLandingLayout from "../../base/HeaderLandingLayout";
import MainDefaultLayout from "../../base/MainDefaultLayout";
import FooterDefaultLayout from "../../base/FooterDefaultLayout";

type LayoutProps = {
  children?: any;
  onScrollToRef: any;
};
const LandingLayout = (props: LayoutProps) => {
  const commonStyle = useCommonStyle();
  const { children, onScrollToRef } = props;

  return (
    <div className={commonStyle.LandingLayout}>
      <HeaderLandingLayout onScrollToRef={onScrollToRef} />
      <MainDefaultLayout>{children}</MainDefaultLayout>
      <FooterDefaultLayout onScrollToRef={onScrollToRef} />
    </div>
  );
};

export default LandingLayout;
