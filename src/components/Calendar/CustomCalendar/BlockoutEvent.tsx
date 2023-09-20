import {Card} from 'react-bootstrap'
import React from "react";
import { Blockout } from "./CustomCalendar.types";

export default function BlockoutEvent({ blockout }: { blockout: Blockout }) {
    
  return (
    <div style={{
      background:"lightgray",
      height:"100%",
      justifyContent: 'center'
    }}
    >
      <div style={{color:"gray", fontWeight:"bold", fontSize:"s", textAlign:"center"}}>
        {blockout.name}
      </div>
    </div>
  );
}