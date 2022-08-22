import DefaultLayout from "../../layout/DefaultLayout";
import useStyles from "./styles";

const JobCreate = () => {
  const styles = useStyles();
  return (
    <DefaultLayout>
      <div className={styles.jobCreateContainer}>JobCreate</div>
    </DefaultLayout>
  );
};

export default JobCreate;
