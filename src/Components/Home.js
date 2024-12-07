
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Welcome to PageTurner Library</h1>

      <Row className="justify-content-center">
        {/* About the Library Section */}
        <Col xs={12} md={5} className="mb-4">
          <Card className="card-equal-height">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6NdihbolpJ-4PTBTK2hiJHXRdjXZorKrNA&s"
            />
            <Card.Body>
              <Card.Title>About PageTurner Library</Card.Title>
              <Card.Text>
                PageTurner Library brings thousands of books to your fingertips. Enjoy the
                convenience of browsing, borrowing, and reading from the comfort of your home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Benefits Section */}
        <Col xs={12} md={5} className="mb-4">
          <Card className="card-equal-height">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBgb4kN-Q8L22_u63hRk8fsP_gQbU3rCkXPkm7xxoakQrskEAti3S3FnuTBStJi4CHg0&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>Benefits of Online Libraries</Card.Title>
              <ul>
                <li>Access to a wide variety of books and genres.</li>
                <li>Read anytime, anywhere – no physical library needed.</li>
                <li>Convenient search features to find the right book quickly.</li>
                <li>Free to join and explore an endless collection of literature.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Genres Section */}
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <div className="genre-section text-center">
            <h2>Explore Various Genres</h2>
            <p>
              At PageTurner Library, we offer a wide range of genres for every reader. Below are some of the popular ones:
            </p>
            <ul className="genre-list">
              <li>Fiction</li>
              <li>Non-fiction</li>
              <li>Science Fiction</li>
              <li>Romance</li>
              <li>Fantasy</li>
              <li>Biography</li>
              <li>Mystery</li>
              <li>Historical</li>
              <li>Self-help</li>
              <li>Children's Books</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
