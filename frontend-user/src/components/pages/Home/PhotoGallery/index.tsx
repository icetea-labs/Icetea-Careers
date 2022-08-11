import { useCommonStyle } from "../../../../styles";
import useStyles from "./styles";

const PhotoGallery = (props: any) => {
  const styles = useStyles();
  const commonStyles = useCommonStyle();

  return (
    <div className={styles.gallery}>
      <div className={commonStyles.section}>
        <div className={styles.galleryContainer}>
          <img src="/images/photo-gallery.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
