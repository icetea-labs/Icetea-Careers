import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const HelpUs = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={styles.helpus}>
      <div className={commonStyles.section}>
        <div className={styles.helpusContainer}>
          <p className="helpus-title">
            Join us and make sustainable impacts through
          </p>
          <p className="helpus-title blending">
            decentralization technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
