import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { ListGroup } from 'react-bootstrap';

const YourComponent = () => {
  return (
    <>
      <ListGroup style={{    width: '200px',
    margin: '-16px',
    position: 'absolute',
    bottom: '8em'}} >
      <ListGroup.Item action variant="dark">
       Home
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Manage Categories
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
       Add Categories
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Edit Categories
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Remove Categories
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
       Search Categories
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
       Modify Categories
      </ListGroup.Item>
      
      
    
      </ListGroup>
    </>
  );
};

export default YourComponent;
