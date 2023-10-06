import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, Col, Row} from 'react-bootstrap'
import { useState} from 'react'

function ModalForCreatingBooking(props){
    const[timeout, setTimeout] = useState(Date.now());
const[timeStart, setTime] = useState(Date.now());
const [timeEnd, setTimeEnd] = useState(Date.now());
const [show1, setShow1] = useState(false);

function convertDate(str) {
    var date = new Date(str)
      var mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2)
    return [date.getFullYear(), mnth, day].join("-");
  }

function convertTime(str){
    var date = new Date(str),
    hours = ("0" + date.getHours()).slice(-2),
    minutes = ("0" + date.getMinutes()).slice(-2);
    return [hours, minutes].join(":")
}

  const handleShow1 = (event) => {
    
    var date = new Date(event.end),
    hours = ("0" + date.getHours()).slice(-2),
    minutes = ("0" + date.getMinutes()).slice(-2);
    setTimeEnd([hours, minutes].join(":"))
    setShow1(true)
  };


return(
<>
{props.Event != undefined?
<Modal size="lg" show={props.show} onHide={props.onHide}  >
      <Modal.Header closeButton style={{ color:"white", background:"#16A34A"}}>
          <Modal.Title style={{ marginLeft:"10px",fontSize:"25px", textAlign:"center"}}>Забронировать аудиторию</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          <Form>
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
              <Col sm="1">
              <img src='../../ic32-calendar.png'></img>
              </Col>
              <Col sm="6">
              <Form.Control type="date" value={ convertDate(props.Event.start)} onChange={(e) => setTimeout(convertDate(e.target.value))} style={{borderColor:"gray", color:"gray", fontSize:'600'}}/>
              </Col>
              <Col>
              <input type="time" id="appt" name="appt" min="08:00" max="21:00" value={convertTime(props.Event.start)} onChange={(e) => setTime(e.target.value)} required style={{border:"none"}}/>
              </Col>
              <Col>
              <input type="time" id="appt" name="appt" min="08:00" max="21:00" value={convertTime(props.Event.end)} onChange={(e) => setTimeEnd(e.target.value)} required style={{border:"none"}} />
              </Col>
            </Row>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col sm="1">
                <img src='../../ic32-company.png'></img>
                </Col>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="Аудитория №2" style={{ color:"grey", fontWeight:"600", fontSize:"20px"}}/>
                </Col>
              </Row>
           
          </Form.Group>

       <Form.Group  style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
        <Row>
           <Col sm="1">
              <img src='../../ic32-edit.png'></img>
              </Col>
          <Col>
          <div>Название мероприятия:</div>
          </Col>
          <Col>
          <Form.Control></Form.Control>
          </Col>
        </Row>
       </Form.Group>

       <Form.Group style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
        <Row>
        <Col sm="1">
              <img src='../../ic32-user.png'></img>
              </Col>
          <Col sm="5">
          <div>Кол-во участников:</div>
          </Col>
          <Col sm="6">
          <Form.Control></Form.Control>
          </Col>
        </Row>
       </Form.Group>

          </Form>
        </Modal.Body>
  
      </Modal> : <></>}
</>)
}

export default ModalForCreatingBooking;