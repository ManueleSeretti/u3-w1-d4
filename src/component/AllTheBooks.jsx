import { Col, Container, Row } from "react-bootstrap";
import books from "../data/book/horror.json";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="container-fluid bg-warning bg-opacity-25">
        <Row className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 gy-3">
          {books.map((book, index) => (
            <Col key={index}>
              <div className="card">
                <img
                  src={book.img}
                  className="card-img-fluid"
                  style={{ height: "200px", objectFit: "contain" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{book.title}</h5>
                  <p className="card-text">$ {book.price} </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
