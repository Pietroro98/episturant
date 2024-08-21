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
                        name: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>N. Tel</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Numero di telefono:"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>numero di persone</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Form.Select>
                <Form.Check type="checkbox" label="Fumatori?" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quando vuole venire?</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Richieste speciali</Form.Label>
                <Form.Control as="textarea" rows={5} />
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
