// import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import axios from "axios";
import LayoutOne from "../../layouts/LayoutOne";
import { Button } from "reactstrap";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otp: true,
      otpnumber: "",
      token: "",
    };
  }

  otpHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://35.154.86.59/api/user/verifyotp", {
        mobile: this.state.mobile,
        otp: this.state.otpnumber,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("auth-token", this.state.token);
        window.location.href = "./newPassword";
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  // otp = true;
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ otp: false });
    axios
      .post("http://35.154.86.59/api/user/sendotp", {
        mobile: this.state.mobile,
        //   email: this.state.email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    console.log(this.state.otp);
    return (
      <Fragment>
        <MetaTags>
          <title>Buynaa | Login</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <LayoutOne headerTop="visible">
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7 col-md-12 p-4 ml-auto mr-auto">
                  {/* style={{ background: "#CFECEC" }} */}
                  {this.state.otp ? (
                    <div className="login-register-wrapper">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form
                            className="text-center"
                            onSubmit={this.submitHandler}
                            method="post"
                          >
                            <input
                              type="number"
                              name="mobile"
                              placeholder="Enter Your Mobile No."
                              value={this.state.mobile}
                              onChange={this.changeHandler}
                            />

                            <div className="button-box">
                              <button type="submit">
                                <span>Submit</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={this.otpHandler}>
                            <input
                              type="number"
                              name="otpnumber"
                              placeholder="OTP No"
                              value={this.state.otpnumber}
                              onChange={this.handlechange}
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn"></div>
                              <Button type="submit">
                                <span>Verify</span>
                              </Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}
