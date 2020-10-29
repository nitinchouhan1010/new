import SocialbuttonComponent from "../../components/socialbutton/socialbutton";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../assets/group.png";
import "./signup.css";

const SignupComponent = () => {
  return (
    <div className="signup">
      <div className="row col-12 m-0 p-0">
        <div className="col-7 img-sec">
          <div className="text-center">
            <span className="create-hire-txt">
              Create, Hire,
              <br /> Collaborate & Manage
            </span>
            <br />
            <span className="project-txt">Projects @ One Place</span>
            <br />
            <img src={image} alt="login Img" className="image" />
          </div>
        </div>
        <div className="col content-center">
          <div>
            <div className="blank-text">
              <b>BLANK.</b>
            </div>
            <div className="sp-signup">
              <span>Supplier Signup</span>
            </div>
            <div>
              <SocialbuttonComponent></SocialbuttonComponent>
            </div>
            <div className="or">
              <span>Or</span>
            </div>
            <div>
              {/* Form Start From Here */}
              <div className="row with-space">
                <Form.Group className="m-0 input-spacing">
                  <Form.Label className="input-title">First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="m-0 input-spacing">
                  <Form.Label className="input-title">Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="no-space">
                <Form.Group className="m-0 input-spacing">
                  <Form.Label className="input-title">Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="m-0 input-spacing">
                  <Form.Label className="input-title">Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Form.Group className="m-0 input-spacing">
                  <Form.Label className="input-title">
                    Confirm Password
                  </Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </div>
              <Button variant="primary" className="signup-btn">
                Signup
              </Button>
              {/* Form End From Here */}
              <div className="check-box">
                <Form.Check label="I’d like to be informed about community news and product updates" />
              </div>
              <div className="terms">
                By creating account you are agree to our{" "}
                <span>Terms of Service & Privacy Policy.</span>
              </div>
              <hr />
              <div className="nt-register-txt">
                Already have an Account?
                <span className="signup">
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
