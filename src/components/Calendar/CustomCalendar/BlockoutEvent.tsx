import {Card} from 'react-bootstrap'
import React from "react";
import { Blockout } from "./CustomCalendar.types";

export default function BlockoutEvent({ blockout }: { blockout: Blockout }) {
    
  return (
    <div style={{
      background:"lightgray",
      height:"100%",
      justifyContent: 'center !important'
    }}
    >
      <div style={{color:"gray", fontWeight:"bold", fontSize:"s", textAlign:"center", position:'absolute',
    top:'250px', left:"13px"}}>
        {blockout.name}
      </div>
    </div>
  );
}