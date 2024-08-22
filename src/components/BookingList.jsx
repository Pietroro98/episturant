// ogi componente deve recuperare dei dati all'avvio per
//il proprio funzionamento avrà bisogno  di uno state,
// abbiamo bisogno di un componente clase

import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Component } from "react";

class bookingList extends Component {
  state = {
    reservations: [], // recupero delle Api un array di prenotazionmi, per questo usero un array vuoto, all'inizio non vedro niente nella lista perche array è vuoto
  };
  render() {
    return (
      <Container>
        <Row className="jystify-content-center my-4">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-3">Prenotazioni:</h2>
            <ListGroup>
              {this.state.reservations.map((res) => {
                return (
                    //la prop key è indispensabile per mantere alte performance anche su migliaia di prenotazioni
                  <ListGroup.Item key={res._id}>
                    {res.name} per {res.numberOfPeople}
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
export default bookingList;
