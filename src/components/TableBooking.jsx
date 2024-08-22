// questo componente renderizzrà un form per la prenotazione del tavolo dai clienti
// questo componente per far funzionare il form avrà bisogno dello state()

import { Component } from "react";

import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

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
        // lo stato iniziale del componente
        // che in questo rappresenta anche lo stato iniziale del form
        name: '',
        phone: '',
        numberOfPeople: 1,
        smoking: false,
        dateTime: '',
        specialRequests: '',
      },
    }

  // funzione oncgange per tutto
  handleChange = (e, property) => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        [property]: e.target.value,
        // property è una stringa, arriva dall'invocazione del metodo all'interno
        // degli onChange dei vari input; potrebbe essere ad es. "name", oppure
        // "numberOfPeople" etc.
        // per poter "calcolare" il valore di property ed utilizzarlo come
        // nome della proprietà del nuovo oggetto reservation, lo utilizziamo
        // tramite le [ ] sfruttando la "square brackets notation"
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // ora inviamo i dati alle API di EPICODE per salvare la prenotazione
    // inviamo i dati tramite una chiamata con metodo 'POST'
    fetch('https://striveschool-api.herokuapp.com/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.reservation),
    })
      .then((response) => {
        if (response.ok) {
          console.log('prenotazione salvata')
          alert('grazie!')
          // dobbiamo svuotare i campi!
          // per farlo resettiamo lo stato, così i campi si svuoteranno da soli
          this.setState({
            reservation: {
              // lo stato iniziale del componente
              name: '',
              phone: '',
              numberOfPeople: '1',
              smoking: false,
              dateTime: '',
              specialRequests: '',
            },
          })
        } else {
          alert('riprova più tardi')
          throw new Error('errore!')
        }
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="Text-center mb-2"> Prenota il tuo tavolo ora!</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Come ti chiami?"
                  required
                  //salviamo nello stato ogni lettera inserita
                  //con questo imput dobbiamo riempire la proprietà name dentro reservation nello satte
                  // funzione per gestire gli eventi di modifica del DOM
                  value={this.state.reservation.name}
                  onChange={(e) => this.handleChange(e, "name")}
                />
              </Form.Group>

              {this.state.reservation.name === "pietro" ? (
                <Alert variant="success">Ti chiami Pietro!</Alert>
              ) : (
                <Alert variant="danger">Non ti chiami Pietro!</Alert>
              )}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>N. Tel</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Numero di telefono:"
                  required
                  onChange={(e) => this.handleChange(e, "phone")}
                  //   onChange={(e) => {
                  //     this.setState({
                  //       reservation: {
                  //         ...this.state.reservation,
                  //         phone: e.target.value,
                  //       },
                  //     });
                  //   }}
                  value={this.state.reservation.phone}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>numero di persone</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => this.handleChange(e, "numberOfPeople")}
                  //   onChange={(e) => {
                  //     this.setState({
                  //       reservation: {
                  //         ...this.state.reservation,
                  //         numberOfPeople: e.target.value,
                  //       },
                  //     });
                  //   }}
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
                  onChange={(e) => this.handleChange(e, "dateTime")}
                  //   onChange={(e) => {
                  //     this.setState({
                  //       reservation: {
                  //         ...this.state.reservation,
                  //         dateTime: e.target.value,
                  //       },
                  //     });
                  //   }}
                  value={this.state.reservation.dateTime}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Richieste speciali</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Inserisci qui eventuali richieste speciali..."
                  onChange={(e) => this.handleChange(e, "specialRequests")}
                  //   onChange={(e) => {
                  //     this.setState({
                  //       reservation: {
                  //         ...this.state.reservation,
                  //         specialRequests: e.target.value,
                  //       },
                  //     });
                  //   }}
                  value={this.state.reservation.specialRequests}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Prenota ora!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TableBooking;
