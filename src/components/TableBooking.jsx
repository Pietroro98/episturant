// questo componente renderizzrà un form per la prenotazione del tavolo dai clienti
// questo componente per far funzionare il form avrà bisogno dello state()

import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// table booking appunto avrà un form con i 6 seguenti campi:
// 1- name --> string
// 2- phone ---> stringa o numero
// 3- numberOfPeople ---> number o string
// 4- smoking ---> true or false (boolean)
// 5- dateTime ---> string (ISO date)
// 6-  specialRequests ---> string

class TableBooking extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: 1,
      smoking: false,
      dateTime: "",
      specialRequests: "",
    },
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="Text-center mb-2"> Prenota il tuo tavolo ora!</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Come ti chiami?"
                  required
                  //salviamo nello stato ogni lettera inserita
                  //con questo imput dobbiamo riempire la proprietà name dentro reservation nello satte
                  // funzione per gestire gli eventi di modifica del DOM
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        name: e.target.value,
                      },
                    });
                  }}
                  // colleghiamo l'interfaccia allo stato al valore imput
                  value={this.state.reservation.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>N. Tel</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Numero di telefono:"
                  required
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        phone: e.target.value,
                      },
                    });
                  }}
                  value={this.state.reservation.phone}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>numero di persone</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        numberOfPeople: e.target.value,
                      },
                    });
                  }}
                  value={this.state.reservation.numberOfPeople}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Form.Select>
                <Form.Check
                  type="checkbox"
                  label="Tavolo Fumatori?"
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        smoking: e.target.checked,
                      },
                    });
                  }}
                  checked={this.state.reservation.smoking}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quando vuole venire?</Form.Label>
                <Form.Control
                  type="datetime-local"
                  required
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        dateTime: e.target.value,
                      },
                    });
                  }}
                  value={this.state.reservation.dateTime}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Richieste speciali</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        specialRequests: e.target.value,
                      },
                    });
                  }}
                  value={this.state.reservation.specialRequests}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TableBooking;
