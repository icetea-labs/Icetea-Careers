import DefaultLayout from "../../layout/DefaultLayout";
import useStyles from "./styles";

const Home = () => {
  const styles = useStyles();
  return (
    <DefaultLayout>
      <div className={styles.homeContainer}>Home</div>
    </DefaultLayout>
  );
};

export default Home;
