import { Container, Row, Col, Carousel, } from "react-bootstrap";
import pastasciutte from "../Data/Menu.json";
import { Component } from "react";
import PastaReviews from "./PastaReviews"

class Home extends Component { // stiamo creando un vero e proprio componente react
  //memoria del componente, active pasta sarebbe quella attiva
  // pastasciutte[0] perche è la prima slide che viene generata aprendo la pagina
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
              onSlide={(i) => {  // metodo in cuui aggiorniamo la pasta ogni volta che il carosello va avanti o indietro
                console.log("slidecambiata", i);
                // dobbiamo settare il setState() per cambiare il componente
                // di stato come nuova active slide
                this.setState({  
                  // [i] è l'indice della slide che sta arrivando, dopo [0] al cambio
                  // questo viene sovrapposto a quello inziale per farlo cambiare
                  // sennò non avremmo aggiornato lo stato del cambio
                  activePasta: pastasciutte[i],
                });
              }}
            >
              {pastasciutte.map((pasta) => { //mappiamo  le slide
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
        <PastaReviews activePasta={this.state.activePasta}/>
        {/* stiamo fornendo al compoinent quale e la pasta attiva tramite il componente padre */}
      </Container>
    );
  }
}

export default Home;
