//questo componente creato a parte quindi potrà da adesso essere utilizzato
// per altre pagine

import {  Row, Col, ListGroup } from "react-bootstrap";

const PastaReviews = function (props){ //dentro props troveremo active pasta che metteremo al posto di this.state
    return(
        <Row className="justify-content-center">
          <Col>
            <ListGroup className="text-center">
              {props.activePasta.comments.map((c) => { // legge i commenti della lista e li fa cambiare con il .map()
                return (   //generiamo le liste per quanto sono i commenti, 
                  <ListGroup.Item key={c.id}> 
                    {c.rating} | {c.comment}  {/* prende il commento con "c." */}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
    )
}

export default PastaReviews

