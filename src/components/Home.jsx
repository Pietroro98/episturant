import { Container, Row, Col, Carousel } from "react-bootstrap";
import pastasciutte from '../Data/Menu.json'

const Home = function () {
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
          <Carousel>


            { pastasciutte.map((pasta) =>{
        return (
            <Carousel.Item key={pasta.id}>
              <img className="w-100" src={pasta.image} alt="pasta pic"></img>
                <Carousel.Caption>
                <h3>{pasta.name}</h3>
                <p>
                {pasta.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item> 
        )
    })} 


          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
