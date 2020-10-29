import "./forgotpassword.css";
import { Button, Card, Form } from "react-bootstrap";

const ForgotpasswordComponent = () => {
  let blank = "BLANK";
  return (
    <div>
      <div className="forgotpassword">
        <div>
          <div className="blank-text">
            <b>{blank}</b>
          </div>
          <Card>
            <Card.Body>
              <Card.Title className="forgot-txt">Forgot Password</Card.Title>
              <div>
                <Form.Group controlId="formBasicEmail" className="m-0">
                  <Form.Label className="input-title">Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </div>
              <Button variant="primary" className="w-100 submit">
                Submit
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotpasswordComponent;
