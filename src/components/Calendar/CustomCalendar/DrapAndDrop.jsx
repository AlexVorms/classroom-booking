import React, { useCallback, useState, useMemo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import {EVENTS} from './CustomCalendar.constants'
import CustomCalendar from './CustomCalendar'
import ModalForDetails from '../ModalForCalendar/ModalForDetails'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DragAndDrop({
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    console.log(event)
    setShow(true)
  };
 
  const handleSelectEvent = useCallback(
    (event) => handleShow(event),
    []
  )
  return (
    <Fragment>
      <div className="height600">
        <CustomCalendar
     
          onSelectEvent={handleSelectEvent}
          // onSelectSlot={handleSelectEvent}
          selectable
        
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{background:"#E9EFFF", color:"#5161ce"}}>
          <Modal.Title >Детали пары</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Предмет: Английский язык</div>
          <div>Аудитория: 202(2)</div>
          <div><img src='./bulding.png'></img>: корпус №4</div>
          <div> Преподаватель: Хакимова А.А.</div>
          <div>Время: 10:35 - 12:10</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

