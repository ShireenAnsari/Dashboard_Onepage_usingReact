import React from "react";
import { Card,ProgressBar,Row } from "react-bootstrap";

const Maincont = () => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="bg-warning col-sm-12">
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="bg-warning">
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className="bg-warning">
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Row className="mt-5 justify-content-center"> 
      <h3>Progress</h3>
      <ProgressBar striped  animated  variant="success" now={40} />
      <br></br>
      <ProgressBar striped  animated  variant="info" now={20} />
      <br></br>
      <ProgressBar striped   animated  variant="warning" now={60} />
      <br></br>
      <ProgressBar striped  animated  variant="danger" now={80} />
    </Row>
   
   
    </>
    
  );
};

export default Maincont;
