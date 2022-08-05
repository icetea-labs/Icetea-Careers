import React from "react";
import { useCommonStyle } from "../../../styles";
import HeaderDefaultLayout from "../../base/MainDefaultLayout";
import MainDefaultLayout from "../../base/MainDefaultLayout";
import FooterDefaultLayout from "../../base/MainDefaultLayout";

type LayoutProps = {
  children?: any;
  onScrollToRef: any;
};
const DefaultLayout = (props: LayoutProps) => {
  const commonStyle = useCommonStyle();
  const { children, onScrollToRef } = props;

  return (
    <div className={commonStyle.DefaultLayout}>
      <HeaderDefaultLayout onScrollToRef={onScrollToRef} />
      <MainDefaultLayout>{children}</MainDefaultLayout>
      <FooterDefaultLayout onScrollToRef={onScrollToRef} />
    </div>
  );
};

export default DefaultLayout;
