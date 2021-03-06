// import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import axios from "axios";
//import LayoutOne from "../../layouts/LayoutOne";
export default class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnfrmPassword: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://35.154.86.59/api/user/fogetpassword", this.state, {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        console.log(response);
        window.localStorage.removeItem("auth-token");
        window.location.href = "./login-register";
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Buynaa | Login</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        {/* <LayoutOne headerTop="visible"> */}
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-7 col-md-12 p-4 ml-auto mr-auto">
                {/* style={{ background: "#CFECEC" }} */}

                <div className="login-register-wrapper">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form
                        className="text-center"
                        onSubmit={this.submitHandler}
                        method="post"
                      >
                        <input
                          type="text"
                          name="password"
                          placeholder="New Password"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />

                        <input
                          type="text"
                          name="cnfrmPassword"
                          placeholder="Confirm Password"
                          value={this.state.cnfrmPassword}
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
              </div>
            </div>
          </div>
        </div>
        {/* </LayoutOne> */}
      </Fragment>
    );
  }
}
