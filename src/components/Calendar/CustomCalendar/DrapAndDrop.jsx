import React, { useCallback, useState, useMemo, Fragment } from 'react'

import { Calendar as BigCalendar } from '../Calendar'

import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import AppointmentEvent from "./AppointmentEvent";
import ModalForLessonDetails from '../ModalForCalendar/ModalForDetails';
import ModalForCreatingBooking from '../ModalForCalendar/ModalForCreateBooking';
import BookingEvent from './BookingEvent';

const localizer = momentLocalizer(moment)
export default function DragAndDrop(props) {

  const [modalShow, setModalShow] = useState(false);
  const [BookingModalShow, setBookingModalShow] = useState(false);
  const[lessonEvent, setEvent] = useState(undefined);
  const[bookingEvent, setBookingEvent] = useState(undefined);
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
    (event) => {
      setBookingModalShow(true)
      setBookingEvent(event)
    },
    []
  )
 
  const array2 = []
  const functin = () =>{
      props.array.map((lesson) => {
        if(lesson.type === "LESSON"){
          let l = {
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
      }
      else{
        let l = {
          start: moment(lesson.start).toDate(),
          end: moment(lesson.end).toDate(),
          title: lesson.title,
          id: lesson.id,
        type: lesson.type,
        lessonNumber: lesson.number,
        lessonType: lesson.lessonType,
        professor:{
          id:null,
          fullName:null,
          shortName:null
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
      }
        
      })
      return array2;
  }
  const components = {
    event: ({ event }) => {
        if(event.type === "LESSON"){
        return <AppointmentEvent appointment={event} />;}
        else{
          return <BookingEvent appointment = {event}></BookingEvent>
        }
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
      

      <ModalForCreatingBooking show = {BookingModalShow} onHide={()=>setBookingModalShow(false)} Event = {bookingEvent}></ModalForCreatingBooking>
 
    </Fragment>
  )
}

