import React from "react";
import { useCommonStyle } from "../../../styles";
import HeaderDefaultLayout from "../../base/HeaderDefaultLayout";
import MainDefaultLayout from "../../base/MainDefaultLayout";
import FooterDefaultLayout from "../../base/FooterDefaultLayout";

type LayoutProps = {
  children?: any;
};
const DefaultLayout = (props: LayoutProps) => {
  const commonStyle = useCommonStyle();
  const { children } = props;

  return (
    <div className={commonStyle.DefaultLayout}>
      <HeaderDefaultLayout />
      <MainDefaultLayout>{children}</MainDefaultLayout>
      <FooterDefaultLayout />
    </div>
  );
};

export default DefaultLayout;
