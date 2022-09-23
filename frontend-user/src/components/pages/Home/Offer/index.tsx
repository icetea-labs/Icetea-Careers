import { Theme, useMediaQuery } from "@mui/material";
import { NORMAL_SPEED } from "../../../../constants";
import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const Offer = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const renderOffer = () => {
    return (
      <div className={styles.offerDetail}>
        <img src="/images/offer-main.svg" className="offer-main" alt="" />
        <img
          src="/images/offer-top-left.svg"
          className="offer-top-left"
          alt=""
          data-aos="fade-up-left"
          data-aos-duration={NORMAL_SPEED}
        />
        <img
          src="/images/offer-top-right.svg"
          className="offer-top-right"
          alt=""
          data-aos="fade-up-right"
          data-aos-duration={NORMAL_SPEED}
        />
        <img
          src="/images/offer-bottom-left.svg"
          className="offer-bottom-left"
          alt=""
          data-aos="fade-down-left"
          data-aos-duration={NORMAL_SPEED}
        />
        <img
          src="/images/offer-bottom-right.svg"
          className="offer-bottom-right"
          alt=""
          data-aos="fade-down-right"
          data-aos-duration={NORMAL_SPEED}
        />
      </div>
    );
  };

  const renderOfferMobile = () => {
    return (
      <div className={styles.offerDetailMobile}>
        <img src="/images/offer-main.svg" className="offer-main" alt="" />
        <div className="offers">
          <div className="offer-item">
            <img src="/images/offer-item.png" alt="" />
            <span>Premium health insurance package</span>
          </div>
          <div className="offer-item">
            <img src="/images/offer-item.png" alt="" />
            <span>Motivating working environment</span>
          </div>
          <div className="offer-item">
            <img src="/images/offer-item.png" alt="" />
            <span>Engagement activities</span>
          </div>
          <div className="offer-item">
            <img src="/images/offer-item.png" alt="" />
            <span>Career growth opportunities</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.offer} ref={props.offerRef}>
      <div className={commonStyles.section}>
        <div className={styles.offerContainer}>
          <p className="offer-title">What We Offer</p>
          {isMobile ? renderOfferMobile() : renderOffer()}
        </div>
      </div>
    </div>
  );
};

export default Offer;
