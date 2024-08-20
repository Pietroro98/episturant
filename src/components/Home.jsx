import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import pastasciutte from "../Data/Menu.json";
import { Component } from "react";

class Home extends Component {
  state = {
    activePasta: pastasciutte[0],
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="text-center my-4">
            <h2>Benvenuti a Epiresturant!</h2>
            <h4>Ristorante Italiano dal 1970</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Carousel
              onSlide={(i) => {
                console.log("slidecambiata", i);
                // dobbiamo settare il setState() per cambiare il componente di stato come nuova active slide
                this.setState({
                  activePasta: pastasciutte[i],
                });
              }}
            >
              {pastasciutte.map((pasta) => {
                return (
                  <Carousel.Item key={pasta.id}>
                    <img
                      className="w-100"
                      src={pasta.image}
                      alt="pasta pic"
                    ></img>
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <ListGroup className="text-center">
              {this.state.activePasta.comments.map((c) => {
                return (
                  <ListGroup.Item key={c.id}>
                    {c.rating} | {c.comment}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
