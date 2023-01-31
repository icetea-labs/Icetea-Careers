import { Dialog } from "@mui/material";
import useStyles from "./styles";

type ModalApplicationTypes = {
  open: boolean;
  handleClose: () => void;
  jobDetail: any;
};

const ModalApplication = (props: ModalApplicationTypes) => {
  const styles = useStyles();
  const { open, handleClose, jobDetail } = props;
  // console.log(jobDetail);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        className={styles.modal}
        scroll="body"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={styles.modalContainer}>
          <img src="/images/modal-title.png" className="img-title" alt="" />
          <p className="title">
            Thank you for applying for the {jobDetail?.title || "N/A"} position
            at Icetea Labs.{" "}
          </p>
          <p style={{ marginBottom: 12 }}>
            We would like to inform you that we have well received your
            application. Due to the large number of applications, we would only
            further contact selected candidates. <br /> We sincerely thank you
            for your understanding.
          </p>
          <p className="">
            Should you have any question, please let us know for futher support
            by contacting us via following information:
          </p>
          <div className="contact">
            <img src="/images/icon-mail.svg" alt="" />
            <span>recruitment@icetea.io</span>
          </div>
          <div className="contact">
            <img src="/images/icon-phone.svg" alt="" />
            <span>+84 246 658 5248 </span>
          </div>
          <div className="contact">
            <img src="/images/socials/telegram-white.svg" alt="" />
            <span>@anhngo38 (Ms. Hong Anh- Talent Acquisition Specialist)</span>
          </div>
          <p className="info">
            Stay tuned and we look forward to speaking with you!
          </p>
        </div>
      </Dialog>
    </>
  );
};

export default ModalApplication;
