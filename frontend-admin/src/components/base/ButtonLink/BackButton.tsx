import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function BackButton(props: any) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Button
        onClick={goBack}
        variant="contained"
        color="warning"
        size="large"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </>
  );
}

export default BackButton;
