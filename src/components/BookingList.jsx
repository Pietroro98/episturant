// ogi componente deve recuperare dei dati all'avvio per
//il proprio funzionamento avrà bisogno  di uno state,
// abbiamo bisogno di un componente clase

import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Component } from "react";

class bookingList extends Component {
  state = {
    reservations: [], // recupero delle Api un array di prenotazionmi, per questo usero un array vuoto, all'inizio non vedro niente nella lista perche array è vuoto.
  };

  // modo corretto per riempire l array vuoto della lista
  // tutti i nostri metodi persionalizzati all' interno della classe devono essere costruiti tramite funzioni freccia, perche le funzioni freccia per definizione non possiedono un proprio this, ma ereditano quello dell ambientre circostante, che e proprio quello che ci serve:

  fetchReservations = () => {
    // recuperiamo tramite una chiamata api le prenoitazioni
    fetch("https://striveshool-api.herokuapp.com/api/reservation")
      .then((response) => {
        if (response.ok) {
          //la chiamata ha tornato 200
          return response.jason();
        } else {
          //la chiamata ha tornato 400 etc..
          throw new Error("La chiamata non è andata a buon fine!");
        }
      })
      .then((arrayOfReservations) => {
        console.log("prenotazioni recuperate dal server", arrayOfReservations);
        this.setState({
          reservations: arrayOfReservations,
        });
      })
      .catch((err) => {
        console.log("Errore durante la richiesta:", err);
        alert("Si è verificato un errore. Riprova più tardi.");
      });
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
