import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const SelectionProcess = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={styles.process} ref={props.processRef}>
      <div className={commonStyles.section}>
        <div className={styles.processContainer}>
          <p className="process-title">Selection process</p>

          <img src="/images/selection-process.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectionProcess;
