import SocialbuttonComponent from "../../components/socialbutton/socialbutton";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../assets/login.png";
import "./login.css";

const LoginComponent = () => {
  return (
    <div className="login">
      <div className="row col-12 m-0 p-0">
        <div className="col-7 img-sec">
          <img src={image} alt="login Img" className="image" />
        </div>
        <div className="col content-center">
          <div>
            <div className="blank-text">
              <b>BLANK.</b>
            </div>
            <div className="sp-login">
              <span>Supplier Login</span>
            </div>
            <div>
              <SocialbuttonComponent></SocialbuttonComponent>
            </div>
            <div className="or">
              <span>Or</span>
            </div>
            <div>
              {/* Form Start From Here */}
              <Form.Group className="m-0 input-spacing">
                <Form.Label className="input-title">Email Address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="m-0 input-spacing">
                <Form.Label className="input-title">Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button variant="primary" className="login-btn">
                Login
              </Button>
              {/* Form End From Here */}
              <div className="f-password">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
              <hr />
              <div className="nt-register-txt">
                Not Register yet?
                <span className="signup">
                  <Link to="/signup">Signup</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
