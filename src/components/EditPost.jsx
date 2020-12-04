import React from "react";
import { Button, Col, Row, Modal, Image, Form } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IconContext } from "react-icons";
import "../styles/PostModal.css";

class EditPost extends React.Component {
  state = {
    showModal: false,
    content: [],
    post: {},
    selectedFile: null,
    imgSubmitStatus: "secondary",
  };

  onChangeHandler = (e) => {
    this.setState({
      content: {
        ...this.state.content,
        [e.target.id]: e.currentTarget.value,
      },
    });
  };

  Edit = async () => {
    this.fileUploadHandler();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
        {
          method: "PUT",
          body: JSON.stringify(this.state.content),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        this.setState({ showModal: false });
        this.props.refetch();
      } else {
        this.setState({ showModal: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  Delete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        this.setState({ showModal: false });
        this.props.refetch();
      } else {
        this.setState({ showModal: false });
      }
    } catch (e) {
      console.log(e);
    }
  };
  fileSelectHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      imgSubmitStatus: "success",
    });
  };

  fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append("post", this.state.selectedFile);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
        {
          method: "POST",
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          body: fd,
        }
      );
      if (response.ok) {
        console.log("image submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div
          onClick={() => this.setState({ showModal: true })}
          className="JumbBiPencilDiv"
        >
          <IconContext.Provider
            value={{
              size: "1.6vw",
              className: "JumbBiPencil",
            }}
          >
            <BiDotsHorizontalRounded />
          </IconContext.Provider>
        </div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit a Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col>
                <Image
                  src={this.props.post.user.image}
                  roundedCircle
                  className="postModalImg"
                />
                <strong className="ml-5">
                  {this.props.post.user.name +
                    " " +
                    this.props.post.user.surname}
                </strong>
              </Col>
            </Row>
            <Form className="mt-2">
              <Form.Group>
                <Form.Control
                  as="textarea"
                  id="text"
                  rows={3}
                  value={this.props.post.text}
                  onChange={(e) => this.onChangeHandler(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={this.fileSelectHandler}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
            <Button
              variant={this.state.imgSubmitStatus}
              onClick={() => this.fileInput.click()}
            >
              {this.state.imgSubmitStatus === "secondary"
                ? "Choose an image"
                : "Ready to Upload"}
            </Button>
            <Button variant="danger" onClick={this.Delete}>
              Delete
            </Button>
            <Button variant="primary" onClick={this.Edit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditPost;
