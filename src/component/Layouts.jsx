import React, { Children, useState } from "react";
import { Col, Container, ListGroup, Offcanvas,Alert ,Row ,Button,Image} from "react-bootstrap";
import Sidebar from "./Sidebar";
import Maincont from "./maincontent";

const Layouts = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Container fluid >
        <Row>
          
          {/* sidebar */
           <ListGroup/>
          }
          <Col className="d-none d-md-block" style={{ height: "100vh", width: "200px", flex: "0 0 auto",backgroundColor:"Lightgrey", borderRight: "0.01rem solid lightgrey" }}>
          <Col xs={6} md={4} className="justify-content-center">
          <Image src="admin.jpg"  style={{width: '105px',
    height: '111px',
    position: 'relative',
    left: '2em',
    top: '11px'}}  roundedCircle />
        </Col>
        <br></br>
        <Sidebar/>
          </Col>

          {/* content */}
          <Col className="m-1">
            {/* header */}
            <Row>
              <Col className="d-flex justify-content-between align-items-center p-1  rounded " style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:"Lightgrey", position:"sticky",margin:"-6px",height:"70px"}}>
                <div className="d-block d-md-none" onClick={() => setShowSidebar(true)}>
                <Button variant="danger" className="text-white">Open Side</Button>
                </div>
                <div><h2>Dashboard</h2></div>
                <div> <Button variant="danger" className="text-white">Login</Button>{' '}</div>
                
              </Col>
              <Row className="mt-4">
              <Alert variant="success">
      <b>Hello Admin!</b>
    </Alert>
              </Row>
              
            </Row>
            {/* <br></br> */}
            <Row className="justify-content-center col-md-12 col-sm-12" >
            <Maincont/>
             
            </Row>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} style={{width:"200px",backgroundColor:"lightgrey"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Col xs={6} md={4} className="justify-content-center">
          <Image src="admin.jpg"  style={{width: '105px',
    height: '111px',
    position: 'relative',
    left: '1em',
    top: '11px'}}  roundedCircle />
        </Col>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {" "}
          {/* <Sidebar /> */
            <Sidebar/>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Layouts;
