import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

class ListBooks extends Component {
  state = {
    name: "",
    bookSearch: this.props.books,
  };
  filterBookList = (valore) => {
    const bookFilter = this.props.books.filter((book) => book.title.toLowerCase().includes(valore));
    this.setState({ bookSearch: bookFilter });
  };

  HandleChange = (valore) => {
    this.setState({ name: valore });
    this.filterBookList(valore);
  };

  render() {
    return (
      <>
        <Container className="container-fluid bg-warning bg-opacity-25">
          <InputGroup className="my-3">
            <InputGroup.Text>Find a book</InputGroup.Text>
            <Form.Control
              value={this.state.name}
              type="text"
              placeholder="Inserisci il titolo"
              onChange={(e) => {
                this.HandleChange(e.target.value);
              }}
            />
          </InputGroup>
          <Row className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 gy-3">
            {this.state.bookSearch.map((book, index) => (
              <Col key={index}>
                <SingleBook book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default ListBooks;
