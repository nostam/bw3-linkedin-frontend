import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./styles.css";
class RSidebar extends React.Component {
  state = {
    Me: [],
  };
  logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("id", "");
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <Card
          style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }}
        >
          <Card.Img
            className="cardImg"
            variant="top"
            src="https://coverfiles.alphacoders.com/372/37275.jpg"
            style={{ objectFit: "cover" }}
            alt="placeholder"
          />
          <Card.Body>
            <div>
              <div style={{ position: "relative" }}>
                <img
                  src={this.props.me.image}
                  alt="placeholder"
                  className="homeSideAvatar"
                />
              </div>
            </div>

            <Card.Text className="crdTxtH wlcmP">
              Welcome
              {" " + this.props.me.name + "!"} <br />
              <Card.Link>Add a bio</Card.Link>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem
              action
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Connections
              <br />
              Grow your network
            </ListGroupItem>
            <ListGroupItem
              action
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              <svg
                style={{ paddingRight: "10px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                width="29"
                height="29"
                focusable="false"
              >
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
              See all Premium Features
            </ListGroupItem>
            <ListGroupItem
              action
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              <svg
                style={{ paddingRight: "10px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="29"
                height="29"
                focusable="false"
              >
                <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
              </svg>
              My Items
            </ListGroupItem>
            <ListGroupItem onClick={() => this.logout()}>
              <button className="logoutbtn">Logout</button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </>
    );
  }
}
export default withRouter(RSidebar);
