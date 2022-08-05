import { useRef } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import useStyles from "./styles";

const scrollOptions: any = {
  behavior: "smooth",
  block: "start",
};

const Home = () => {
  const styles = useStyles();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const usecasesRef = useRef<HTMLDivElement | null>(null);
  const overviewRef = useRef<HTMLDivElement | null>(null);
  const roadmapRef = useRef<HTMLDivElement | null>(null);

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onScrollToRef = (
    name: "about" | "features" | "usecase" | "overview" | "roadmap"
  ) => {
    switch (name) {
      case "about":
        aboutRef?.current?.scrollIntoView(scrollOptions);
        break;
      case "features":
        window.scrollTo({
          top: (featuresRef?.current?.offsetTop || 0) + 100,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "usecase":
        usecasesRef?.current?.scrollIntoView(scrollOptions);
        break;
      case "overview":
        overviewRef?.current?.scrollIntoView(scrollOptions);
        break;
      case "roadmap":
        roadmapRef?.current?.scrollIntoView(scrollOptions);
        break;

      default:
        break;
    }
  };

  //#region RENDER

  const renderBtnScrollToTop = () => {
    return (
      <div className={styles.btnScrollToTop} onClick={onScrollToTop}>
        <img src="/images/icon-arrow-up.svg" alt="" />
      </div>
    );
  };

  //#endregion RENDER

  return (
    <DefaultLayout onScrollToRef={onScrollToRef}>
      Home

      {renderBtnScrollToTop()}
    </DefaultLayout>
  );
};

export default Home;
