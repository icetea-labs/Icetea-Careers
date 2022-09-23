import { Theme, useMediaQuery } from "@mui/material";
import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const SelectionProcess = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <div className={styles.process} ref={props.processRef}>
      <div className={commonStyles.section}>
        <div className={styles.processContainer}>
          <p className="process-title">Selection Process</p>
          {isMobile ? (
            <img src="/images/selection-process-mobile.svg" alt="" />
          ) : (
            <img src="/images/selection-process.svg" alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionProcess;
