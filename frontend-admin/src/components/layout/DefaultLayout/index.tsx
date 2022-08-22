import React from "react";
import { useCommonStyle } from "../../../styles";
import LeftDefaultLayout from "../../base/LeftDefaultLayout";
import RightDefaultLayout from "../../base/RightDefaultLayout";

const DefaultLayout = (props: any) => {
  const commonStyle = useCommonStyle();

  return (
    <div className={commonStyle.DefaultLayout}>
      <LeftDefaultLayout />
      <RightDefaultLayout>{props.children}</RightDefaultLayout>
    </div>
  );
};

export default DefaultLayout;
