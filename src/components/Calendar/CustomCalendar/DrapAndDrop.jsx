import React, { useCallback, useState, useMemo, Fragment } from 'react'

import { Calendar as BigCalendar } from '../Calendar'

import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import AppointmentEvent from "./AppointmentEvent";
import ModalForLessonDetails from '../ModalForCalendar/ModalForDetails';
import ModalForCreatingBooking from '../ModalForCalendar/ModalForCreateBooking';
import BookingEvent from './BookingEvent';
import LoadSpinner from '../../other/LoadSpinner';
import {Card} from 'react-bootstrap'
const localizer = momentLocalizer(moment)
export default function DragAndDrop(props) {

  const [modalShow, setModalShow] = useState(false);
  const[lessonEvent, setEvent] = useState(undefined);
  const[changeDate, setChangeDate] = useState(false);

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

  const ChangeWeek =(time) =>{
    var curr = new Date(time); 
    var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    var firstday = new Date(curr.setDate(first)).toUTCString();
    var lastday = new Date(curr.setDate(last)).toUTCString();
    setChangeDate(true);
    props.getSheduleThunk(props.match.params.id, convert(firstday), convert(lastday))
}

const convert = (str) =>{
  var date = new Date(str)
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2)
  return [date.getFullYear(), mnth, day].join("-");
}

  return (
    <div>
      <Fragment>
      {(props.isLoading && !changeDate)? <LoadSpinner></LoadSpinner> :
      <div className="height600">
        <BigCalendar localizer={localizer} events = {functin()} step={30}
         onNavigate={(e) => {ChangeWeek(e)}}
          onSelectEvent={handleSelectEvent}
          selectable
          components={components}
          audience={GetAudienceName()} 
          AudienceId = {props.match.params.id}
         AddBookingThunk={props.AddBookingThunk}>
          </BigCalendar>
      </div>
    }
       <ModalForLessonDetails show={modalShow} onHide={()=>setModalShow(false)} Event = {lessonEvent}></ModalForLessonDetails>
      

       {/* {isEvent? <ModalForCreatingBooking show = {BookingModalShow} onHide={()=>setBookingModalShow(false)}
        Event = {bookingEvent} audience={GetAudienceName()} 
        Start = {convert(bookingEvent.Start)}
        AudienceId = {props.match.params.id} AddBookingThunk={props.AddBookingThunk}>
        </ModalForCreatingBooking>: <></>} */}
      </Fragment>
    
   </div>
  )
}

