
import React from "react";
import {
  AppointmentStatusCode,
  EVENT_STATUS_COLORS,
} from "./CustomCalendar.constants.tsx";
import { Appointment } from "./CustomCalendar.types.tsx";
import { Card } from "react-bootstrap";

export default function AppointmentEvent({
  appointment,
}: {
  appointment: Appointment;
}) {
  const { location, status, resource, address } = appointment;
  const background = EVENT_STATUS_COLORS[status as AppointmentStatusCode];

  return (
    <div style={{
      background:`${background}`,
     height:"100%",
    color:"black"}} >
      <div style={{ marginLeft:10, background:'#E9EFFF', height:"100%"}}>
    <div style={{alignItems:"center", justifyContent:"space-between"}}>
      <div>
        <div style={{fontSize:"10px", color:'#E9EFFF'}}>{location}</div>
      </div>
      <div>
        <div style={{fontSize:"10px", color: '#E9EFFF'}}>{resource}</div>
      </div>
    </div>
    <div>
      {address.split("\n").map((add) => (
        <div style={{fontSize:"10px", color: '#E9EFFF'}}>{add}</div>
      ))}
    </div>
    </div>
  </div>
  );
}