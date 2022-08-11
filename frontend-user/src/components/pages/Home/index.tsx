import { useRef, useState } from "react";
import LandingLayout from "../../layouts/LandingLayout";
import Foreword from "./Foreword";
import HelpUs from "./HelpUs";
import JobOpportunities from "./JobOpportunities";
import Offer from "./Offer";
import PhotoGallery from "./PhotoGallery";
import SelectionProcess from "./SelectionProcess";
import useStyles from "./styles";

const scrollOptions: any = {
  behavior: "smooth",
  block: "start",
};

const Home = () => {
  const styles = useStyles();
  const jobsRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLDivElement | null>(null);
  const offerRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [inputSearch, setInputSearch] = useState<string>("");

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onScrollToRef = (name: "jobs" | "process" | "offer" | "contact") => {
    switch (name) {
      case "jobs":
        jobsRef?.current?.scrollIntoView(scrollOptions);
        break;
      case "process":
        window.scrollTo({
          top: (processRef?.current?.offsetTop || 0) + 100,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "offer":
        offerRef?.current?.scrollIntoView(scrollOptions);
        break;
      case "contact":
        contactRef?.current?.scrollIntoView(scrollOptions);
        break;

      default:
        break;
    }
  };

  const onSearching = (e: any) => {
    setInputSearch(e.target.value);
  };

  const handleSearch = () => {
    console.log("inputSearch", inputSearch);
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
    <LandingLayout onScrollToRef={onScrollToRef}>
      <Foreword
        inpuSearch={inputSearch}
        onSearching={onSearching}
        handleSearch={handleSearch}
      />

      <JobOpportunities jobsRef={jobsRef} />
      <SelectionProcess processRef={processRef} />
      <HelpUs />
      <Offer offerRef={offerRef} />
      <PhotoGallery />

      <div ref={contactRef}></div>

      {/* {renderBtnScrollToTop()} */}
    </LandingLayout>
  );
};

export default Home;
