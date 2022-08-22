import DefaultLayout from "../../layout/DefaultLayout";
import useStyles from "./styles";

const Admins = () => {
  const styles = useStyles();
  return (
    <DefaultLayout>
      <div className={styles.adminsContainer}>Admins</div>
    </DefaultLayout>
  );
};

export default Admins;
