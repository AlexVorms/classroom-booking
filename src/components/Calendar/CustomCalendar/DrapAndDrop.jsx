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
  const handleSelectEvent = useCallback(
    (event) => {
      setModalShow(true)
      setEvent(event)
    },
    []
  )
    const GetAudienceName = () =>{
      var name = ''
      var id = props.match.params.id;
      props.audiences.map((audience) =>{
        if(audience.id === id){
          name = audience.name
        }
      })
      return name;
    }
  const addNewBooking = useCallback(
    (event) => {
      setBookingModalShow(true)
      setBookingEvent(event)
      console.log(props)
    },
    []
  )
 
  const array2 = []
  const functin = () =>{
      props.array.map((lesson) => {
        if(lesson.lessonType !== "BOOKING"){
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
        if(event.lessonType !== "BOOKING"){
        return <AppointmentEvent appointment={event} />;}
        else{
          return <BookingEvent appointment = {event}></BookingEvent>
        }
    },
  };
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
      

      <ModalForCreatingBooking show = {BookingModalShow} onHide={()=>setBookingModalShow(false)} Event = {bookingEvent} audience={GetAudienceName()} AudienceId = {props.match.params.id} AddBookingThunk={props.AddBookingThunk}></ModalForCreatingBooking>
 
    </Fragment>
  )
}

