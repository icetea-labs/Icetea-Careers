import {
  DECORATION_ANIMATE_DURATION,
  TEXT_ANIMATED_DURATION,
} from "../../../../constants";
import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const PivotOfPolka = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={`${commonStyles.fbSection} ${styles.pivotWrap}`}>
      <div className={`${commonStyles.fbContainer} ${commonStyles.fbGridBase}`}>
        <div
          className={styles.pivotContainer}
          data-aos="slide-up"
          data-aos-duration={TEXT_ANIMATED_DURATION}
        >
          <p className="pivot-intro">The pivot of Polkafoundry to Firebird</p>
          <p className="pivot-title">
            Icetea Labs, Parent Corporation to{" "}
            <span className={styles.colorOrange}>PolkaFoundry</span>, started
            building Layer 1 for this blockchain more than 3 years ago.
          </p>
          <div className="pivot-content-wrap">
            <p className="">
              Despite a strugging time finding a niched in the market in the
              first place, with the possession of several blockchain's valuable
              ideas, we have transformed into{" "}
              <b>
                a leading gaming and metaverse incubator and enabler in Asia
              </b>{" "}
              since the later half of 2021.
            </p>
            <p className="">
              <span>
                We are now providing games with top-quality services throughout
                their <b>life cycles</b>, including Project Incubation, Advisory
                Partner, Launchpad, Game Guild, Esport Tournament, etc.
              </span>
              <br />
              <span>
                Since then, many games and metaverse have come to us and asked
                for a gaming-optimized blockchain.
              </span>
            </p>
          </div>
        </div>

        <img
          src="/images/decorations/pivot-decoration-1.svg"
          className="decoration decoration-pivot-1"
          alt=""
          data-aos="slide-right"
          data-aos-duration={DECORATION_ANIMATE_DURATION}
        />
        <img
          src="/images/decorations/pivot-decoration-2.svg"
          className="decoration decoration-pivot-2"
          alt=""
          // data-aos="slide-left"
          // data-aos-duration={DECORATION_ANIMATE_DURATION}
        />
      </div>
    </div>
  );
};

export default PivotOfPolka;
