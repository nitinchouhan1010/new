import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
const SignupComponent = lazy(() => import("./pages/signuppage/signup"));
const LoginComponent = lazy(() => import("./pages/loginpage/login"));
const ForgotpasswordComponent = lazy(() =>
  import("./pages/forgotpasswordpage/forgotpassword")
);

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/signup" component={SignupComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/forgotpassword" component={ForgotpasswordComponent} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
