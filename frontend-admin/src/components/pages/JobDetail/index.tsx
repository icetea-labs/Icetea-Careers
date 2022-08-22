import DefaultLayout from "../../layout/DefaultLayout";
import useStyles from "./styles";

const JobDetail = () => {
  const styles = useStyles();
  return (
    <DefaultLayout>
      <div className={styles.jobDetailContainer}>JobDetail</div>
    </DefaultLayout>
  );
};

export default JobDetail;
