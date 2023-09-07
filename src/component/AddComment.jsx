import { Component } from "react";
import { Button, Form } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.id,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTgwZGMwMzRmZjAwMTQwM2Y0ZjMiLCJpYXQiOjE2OTQwODgzNTcsImV4cCI6MTY5NTI5Nzk1N30.vrJTCqAqY2RHrfENaHsCahiSPiXPbIGG0RZTWaBGmrQ",
        },
      });
      if (resp.ok) {
        this.setState({ comment: "", rate: "", elementId: this.props.id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form className="mt-2 border" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="commenta"
            required
            value={this.state.comment}
            onChange={(e) => {
              this.setState({ comment: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            required
            value={this.state.rate}
            onChange={(e) => {
              this.setState({ rate: e.target.value });
            }}
          >
            <option>Seleziona un voto da 1 a 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}
export default AddComment;
