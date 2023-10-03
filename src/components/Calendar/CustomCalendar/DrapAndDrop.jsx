import React, { useCallback, useState, useMemo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import {EVENTS} from './CustomCalendar.constants'
import CustomCalendar from './CustomCalendar'
import ModalForDetails from '../ModalForCalendar/ModalForDetails'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, Col, Row} from 'react-bootstrap'

export default function DragAndDrop(props) {
  console.log(props)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
const[timeout, setTimeout] = useState(Date.now());
const[timeStart, setTime] = useState(Date.now());
const [timeEnd, setTimeEnd] = useState(Date.now());
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true)
  };
 
  function convert(str) {
    var date = new Date(str)
    
      var mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2);
      setTime([hours, minutes].join(":"))
    return [date.getFullYear(), mnth, day].join("-");
  }

  const handleClose1 = () => setShow1(false);

  const handleShow1 = (event) => {
    setTimeout(convert(event.start))
    var date = new Date(event.end),
    hours = ("0" + date.getHours()).slice(-2),
    minutes = ("0" + date.getMinutes()).slice(-2);
    setTimeEnd([hours, minutes].join(":"))
    setShow1(true)
  };


  const handleSelectEvent = useCallback(
    (event) => handleShow(event),
    []
  )

  const addNewBooking = useCallback(
    (event) => handleShow1(event),
    []
  )
  const today = new Date();
  return (
    <Fragment>
      <div className="height600">
        <CustomCalendar
        step={30}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={addNewBooking}
          selectable
          events={props.array}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ color:"#5161ce"}}>
          <Modal.Title style={{ marginLeft:"10px",fontSize:"25px"}}>Детали пары</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"17px",color:"gray"}}>
          <div><img src='./tv.png'></img>    Предмет: Английский язык</div>
          <img src='./ver.png'></img>
          <div><img src='./company.png'></img>    Аудитория: 202(2)</div>
          <img src='./ver.png'></img>
          <div><img src='./map.png'></img>    Корпус: корпус №4</div>
          <img src='./ver.png'></img>
          <div> <img src='./user.png'></img>    Преподаватель: Хакимова А.А.</div>
          <img src='./ver.png'></img>
          <div><img src='./time.png'></img>    Время: 10:35 - 12:10</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={show1} onHide={handleClose1}  >
      <Modal.Header closeButton style={{ color:"#7367F0"}}>
          <Modal.Title style={{ marginLeft:"10px",fontSize:"25px", textAlign:"center"}}>Забронировать аудиторию</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
          <Form>
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
              <Col sm="1">
              <img src='./time.png'></img>
              </Col>
              <Col sm="6">
              <Form.Control type="date" value={timeout} onChange={(e) => setTimeout(convert(e.target.value))} style={{borderColor:"#7367F0", color:"#7367F0"}}/>
              </Col>
              <Col>
              <input type="time" id="appt" name="appt" min="08:00" max="21:00" value={timeStart} onChange={(e) => setTime(e.target.value)} required style={{border:"none"}}/>
              </Col>
              <Col>
              <input type="time" id="appt" name="appt" min="08:00" max="21:00" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} required style={{border:"none"}} />
              </Col>
            </Row>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col sm="1">
                <img src='./company.png'></img>
                </Col>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="Аудитория №2" style={{ color:"#7367F0"}}/>
                </Col>
              </Row>
           
          </Form.Group>

       <Form.Group  style={{marginTop:"20px", color:"#7367F0"}}>
        <Row>
           <Col sm="1">
              <img src='./edit.png'></img>
              </Col>
          <Col>
          <div>Название мероприятия:</div>
          </Col>
          <Col>
          <Form.Control></Form.Control>
          </Col>
        </Row>
       </Form.Group>

       <Form.Group style={{marginTop:"20px", color:"#7367F0"}}>
        <Row>
        <Col sm="1">
              <img src='./user.png'></img>
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
  
      </Modal>
    </Fragment>
  )
}

