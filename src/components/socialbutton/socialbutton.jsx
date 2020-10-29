import "./socialbutton.css";
import { Button } from "react-bootstrap";
import microsoftImage from "../../assets/microsoft.png";
import googleImage from "../../assets/google.svg";

const SocialbuttonComponent = () => {
  return (
    <div className="social-login">
      <Button variant="primary" className="google-button">
        <img src={googleImage} alt="Google Img" className="google-Image" />
      </Button>
      <Button variant="primary" className="microsoft-button">
        <img
          src={microsoftImage}
          alt="Microsoft Img"
          className="microsoft-Image"
        />
      </Button>
    </div>
  );
};

export default SocialbuttonComponent;
