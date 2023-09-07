import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleSelect = () => {
    this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
  };
  render() {
    const cardClass = this.state.selected ? "border-2 border-danger " : "";
    return (
      <Card className={cardClass}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => {
            this.handleSelect();
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
          {this.state.selected && <CommentArea id={this.props.book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
