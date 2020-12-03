import React, { Component } from "react";
import { Row, Col, Form, Button, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterLogo from "../footer_logo.svg";
import "../styles/SignUp.css";
export default class SignUp extends Component {
  state = {
    user: [],
    hidden: true,
  };
  url = "https://striveschool-api.herokuapp.com/api/account/register";
  header = {
    Authorization: process.env.REACT_APP_TOKEN,
    ContentType: "application/json",
  };
  submitData = async () => {
    try {
      let response = await fetch("this.url", {
        method: "POST",
        body: JSON.stringify(this.state.user),
        header: this.header,
      });
      if (response.ok) {
        this.props.history.details.push("/user/me");
      }
    } catch (error) {
      console.log(error);
    }
  };
  onChangeHandler = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.id]: e.currentTarget.value },
    });
  };
  handleLogin = (e) => {
    if (e.keyCode === 13) {
      this.props.submitData(this.state.user);
    } else {
      this.setState({
        user: { ...this.state.user, [e.target.id]: e.currentTarget.value },
      });
    }
  };
  toggleShow = (e) => {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  };
  render() {
    return (
      <Container>
        <Col className="d-flex justify-content-center mx-auto mt-4 flex-column text-center">
          <img
            src={FooterLogo}
            className="mb-4"
            alt="logo"
            style={{ height: "30px" }}
          />
          <h3>Make the most of your professional life</h3>
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          sm={{ span: 10, offset: 1 }}
          className="signupCol mt-5 bg-white"
        >
          <div className="shadowBox">
            <div className="mb-3">
              <h2>Sign in</h2>
              <span>Stay updated on your professional world</span>
            </div>
            <Form>
              <Form.Group>
                <Form.Control
                  required
                  id="username"
                  value={this.state.user.username}
                  type="text"
                  size="lg"
                  placeholder="Email or Phone"
                  onKeyDown={(e) => this.handleLogin(e)}
                  onChange={(e) => this.onChangeHandler(e)}
                />
              </Form.Group>
              <Form.Group className="inputPwd">
                <Form.Control
                  required
                  id="password"
                  value={this.state.user.password}
                  type={this.state.hidden ? "password" : "text"}
                  size="lg"
                  placeholder="Password"
                  onKeyDown={(e) => this.handleLogin(e)}
                  onChange={(e) => this.onChangeHandler(e)}
                />
                <Badge
                  pill
                  className="inputToggle"
                  onClick={(e) => this.toggleShow(e)}
                >
                  {this.state.hidden ? "show" : "hide"}
                </Badge>
              </Form.Group>
            </Form>
            <a className="forgetPwd">Forget your password?</a>
            <Col className="signupCol">
              <Button className="loginBtn">Sign in</Button>
            </Col>
          </div>
          <Row className="d-flex justify-content-around mt-4 mx-auto ">
            New to LinkedIn? <Link to="/signup">Join now</Link>
          </Row>
        </Col>
      </Container>
    );
  }
}
