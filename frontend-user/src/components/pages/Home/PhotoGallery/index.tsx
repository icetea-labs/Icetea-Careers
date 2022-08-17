import { Theme, useMediaQuery } from "@mui/material";
import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const PhotoGallery = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <div className={styles.gallery}>
      <div className={commonStyles.section}>
        <div className={styles.galleryContainer}>
          {isMobile ? (
            <img src="/images/photo-gallery-mobile.png" alt="" />
          ) : (
            <img src="/images/photo-gallery.png" alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
