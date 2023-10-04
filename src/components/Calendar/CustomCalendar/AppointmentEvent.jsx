
import React from "react";
import {
  AppointmentStatusCode,
  EVENT_STATUS_COLORS,
} from "./CustomCalendar.constants";
import { Appointment } from "./CustomCalendar.types";
import { Card } from "react-bootstrap";

function AppointmentEvent(props) {

  function convert(str) {
    var date = new Date(str)
      var hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2);
    return [hours, minutes].join(":");
  }

  return (
   
    <div style={{
      background:`#5272E9`,
     height:"100%",
    color:"#5272E9"}} >
      <div style={{ marginLeft:10, background:'#E9EFFF', height:"100%"}}>
    <div style={{alignItems:"center !important", justifyContent:"space-between"}}>
      <div>
        <div style={{position:"absolute",top:"10px", left:"20px", fontWeight:'700'}}>{props.appointment.title}</div>
      </div>
      <div>
        <div style={{position:"absolute",top:"120px", left:"20px"}}>{convert(props.appointment.start)} - {convert(props.appointment.end)}</div>
      </div>
    </div>
   
    </div>
  </div>
  );
}

export default AppointmentEvent;