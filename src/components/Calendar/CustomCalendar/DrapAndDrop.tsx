import moment from "moment";
import React, { useCallback, useState } from "react";
import CustomCalendar from "./CustomCalendar";
import { EVENTS } from "./CustomCalendar.constants";

class DragAndDrop extends React.Component{
    render(){
  return (
    <CustomCalendar onSelecting={slot => false}/>
  );
    }
}

export default DragAndDrop