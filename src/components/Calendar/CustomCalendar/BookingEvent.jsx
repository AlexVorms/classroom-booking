import {Card} from 'react-bootstrap'
import React from "react";
import { Blockout } from "./CustomCalendar.types";

 function BookingEvent(props) {
  function convert(str) {
    var date = new Date(str)
      var hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2);
    return [hours, minutes].join(":");
  }
  return (
    <div style={{
      background:`#24B0C9`,
     height:"100%",
    color:"#24B0C9"}} >
      <div style={{ marginLeft:10, background:'#E6FEFF', height:"100%"}}>
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

export default  BookingEvent;