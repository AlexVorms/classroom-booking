import {Card} from 'react-bootstrap'
import React from "react";
import { Blockout } from "./CustomCalendar.types";

export default function BlockoutEvent({ blockout }: { blockout: Blockout }) {
    
  return (
    <div >
      <p>
        {blockout.name}
      </p>
    </div>
  );
}