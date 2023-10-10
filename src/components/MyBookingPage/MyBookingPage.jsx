import { Card, Button, Container } from "react-bootstrap";
import "./booking.css"
import CanseledItem from "./CanseledItem";
import NewItem from "./NewItem";
import ApprovedItem from "./ApprovedItem";
import React
 from "react";
import LoadSpinner from "../other/LoadSpinner";
class MyBookingPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
            {this.props.isLoading ?  <LoadSpinner></LoadSpinner>
            :  <div>
            <div className="container CardPage">
    <div className="row">
    {this.props.bookings.map((booking) => {
                    if(booking.status === 'Canceled'){
                        return <CanseledItem key={booking.id} booking = {booking}/>
                    }
                    else if(booking.status === 'New'){
                        return <NewItem key={booking.id} booking = {booking}/>
                    }
                    else if(booking.status === 'Approved'){
                        return <ApprovedItem key={booking.id} booking = {booking}/>
                    }
                })
                }
    </div>
    </div>
    <img src=".\NotFound.png" style={{position:"absolute", bottom:"0", right:"0", height:"30%" }}/>
    </div>}
        </div>
        )
    }
}

export default MyBookingPage;