import React, { useCallback, useState, useMemo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import {EVENTS} from './CustomCalendar.constants'
import CustomCalendar from './CustomCalendar'
import ModalForDetails from '../ModalForCalendar/ModalForDetails'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap'
export default function DragAndDrop({
}) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    console.log(event)
    setShow(true)
  };
 

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (event) => {
    console.log(event)
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

  return (
    <Fragment>
      <div className="height600">
        <CustomCalendar
     
          onSelectEvent={handleSelectEvent}
          onSelectSlot={addNewBooking}
          selectable
        
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{color:"#7367F0"}}>Email address</Form.Label>
            <Form.Control type="email"   style={{borderColor:"#7367F0"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{color:"#7367F0"}}>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3}  style={{borderColor:"#7367F0"}}/>
        </Form.Group>
          </Form>
        </Modal.Body>
  
      </Modal>
    </Fragment>
  )
}

