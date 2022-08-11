import { COMPONENT_ANIMATED, NORMAL_SPEED } from "../../../../constants";
import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const Offer = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={styles.offer} ref={props.offerRef}>
      <div className={commonStyles.section}>
        <div className={styles.offerContainer}>
          <p className="offer-title">What we offer</p>
          <div className={styles.offerDetail}>
            <img src="/images/offer-main.svg" className="offer-main" alt="" />
            <img
              src="/images/offer-top-left.svg"
              className="offer-top-left"
              alt=""
              data-aos="zoom-in-left"
              data-aos-duration={NORMAL_SPEED}
            />
            <img
              src="/images/offer-top-right.svg"
              className="offer-top-right"
              alt=""
              data-aos="zoom-in-right"
              data-aos-duration={NORMAL_SPEED}
            />
            <img
              src="/images/offer-bottom-left.svg"
              className="offer-bottom-left"
              alt=""
              data-aos="zoom-in-left"
              data-aos-duration={NORMAL_SPEED}
            />
            <img
              src="/images/offer-bottom-right.svg"
              className="offer-bottom-right"
              alt=""
              data-aos="zoom-in-right"
              data-aos-duration={NORMAL_SPEED}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
