import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function ModalForLessonDetails (props){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function convert(str) {
    var date = new Date(str)
      var hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2);
    return [hours, minutes].join(":");
    
  }
  return (
    <>
    {props.Event != undefined? <Modal  size="md" show={props.show} onHide={props.onHide} >
        <Modal.Header closeButton style={{ color:"#5161ce"}}>
          <Modal.Title style={{ marginLeft:"10px",fontSize:"25px"}}> {props.Event.lessonType !== "BOOKING"?'Детали пары':'Детали мероприятия'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"17px",color:"gray"}}>
          <div><img src='../../tv.png'></img>    {props.Event.lessonType !== "BOOKING"?'Предмет: ':'Название мероприятия: '} {props.Event.title}</div>
          <img src='../../ver.png'></img>
          <div><img src='../../company.png'></img>    Аудитория: {props.Event.audience.name}</div>
          <img src='../../ver.png'></img>
          <div><img src='../../map.png'></img>    Корпус: {props.Event.audience.building.name}</div>
          <img src='../../ver.png'></img>
          {props.Event.lessonType !== "BOOKING"?<div><div> <img src='../../user.png'></img>    Преподаватель: {props.Event.professor.fullName}</div>
          <img src='../../ver.png'></img></div>: <></>}
          <div><img src='../../time.png'></img>    Время: {convert(props.Event.start)} - {convert(props.Event.end)}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.onHide}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal> : <></>}
      
    </>
  );
}

export default ModalForLessonDetails;