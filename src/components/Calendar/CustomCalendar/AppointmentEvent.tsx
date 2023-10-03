
import React from "react";
import {
  AppointmentStatusCode,
  EVENT_STATUS_COLORS,
} from "./CustomCalendar.constants";
import { Appointment } from "./CustomCalendar.types";
import { Card } from "react-bootstrap";

export default function AppointmentEvent({
  appointment,
}: {
  appointment: Appointment;
}) {
  const { title, status} = appointment;
  const background = EVENT_STATUS_COLORS[status as AppointmentStatusCode];

  return (
    <div style={{
      background:`${background}`,
     height:"100%",
    color:"#5272E9"}} >
      <div style={{ marginLeft:10, background:'#E9EFFF', height:"100%"}}>
    <div style={{alignItems:"center !important", justifyContent:"space-between"}}>
      <div>
        <div style={{position:"absolute",top:"10px", left:"20px", fontWeight:'700'}}>{title}</div>
      </div>
      <div>
        <div style={{position:"absolute",top:"80px", left:"20px"}}></div>
      </div>
    </div>
   
    </div>
  </div>
  );
}