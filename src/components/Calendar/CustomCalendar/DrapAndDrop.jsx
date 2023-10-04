import React, { useCallback, useState, useMemo, Fragment } from 'react'

import { Calendar as BigCalendar } from '../Calendar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, Col, Row} from 'react-bootstrap'
import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import AppointmentEvent from "./AppointmentEvent";
import ModalForLessonDetails from '../ModalForCalendar/ModalForDetails';

const localizer = momentLocalizer(moment)
export default function DragAndDrop(props) {

  const [modalShow, setModalShow] = useState(false);
  const[lessonEvent, setEvent] = useState(undefined);
  const [show1, setShow1] = useState(false);
const[timeout, setTimeout] = useState(Date.now());
const[timeStart, setTime] = useState(Date.now());
const [timeEnd, setTimeEnd] = useState(Date.now());
  
 
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
    (event) => {
      setModalShow(true)
      setEvent(event)
    },
    []
  )

  const addNewBooking = useCallback(
    (event) => handleShow1(event),
    []
  )
 
  const array2 = []
  const functin = () =>{
      props.array.map((lesson) => {
        const l = {
          start: moment(lesson.start).toDate(),
          end: moment(lesson.end).toDate(),
          title: lesson.title,
          id: lesson.id,
        type: lesson.type,
        lessonNumber: lesson.number,
        lessonType: lesson.lessonType,
        professor:{
          id:lesson.professor.id,
          fullName:lesson.professor.fullName,
          shortName:lesson.professor.shortName
        },
        audience:{
          id:lesson.audience.id,
          name:lesson.audience.name,
          shortName:lesson.audience.shortName,
          building:{
              id:lesson.audience.building.id,
              name:lesson.audience.building.name,
              address:lesson.audience.building.address,
              latitude: lesson.audience.building.latitude,
              longitude: lesson.audience.building.longitude
          }
      }
        }
        array2.push(l)
      })
      return array2;
  }
  const components = {
    event: ({ event }) => {
        return <AppointmentEvent appointment={event} />;
    },
  };
  const today = new Date();
  return (
    <Fragment>
      <div className="height600">

        <BigCalendar localizer={localizer} events = {functin()} step={30}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={addNewBooking}
          selectable
          components={components}>
          </BigCalendar>
      </div>
      <ModalForLessonDetails show={modalShow} onHide={()=>setModalShow(false)} Event = {lessonEvent}></ModalForLessonDetails>
      


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

