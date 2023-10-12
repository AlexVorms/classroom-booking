import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux"
import BookingDetails from './BookingDetails';
import {getBookingsDetailsThunk} from '../../reducers/BookingDetailsReducer'
import {deleteBookingPage} from '../../reducers/MyBookingReducer'
import { Navigate } from 'react-router-dom';
import LoadSpinner from "../other/LoadSpinner"

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class BookingDetailsContainer extends React.Component {
    componentDidMount(){
        this.props.getBookingsDetailsThunk(this.props.match.params.id);
    }
    render(){
        return(
            <div>
                {!this.props.isDelete?
        <div>
           {(this.props.bookingDetails.length == 0)? <LoadSpinner></LoadSpinner>: <BookingDetails {...this.props}></BookingDetails>}
        </div>
         : <Navigate to = "/mybooking"></Navigate>}
        </div>)
    }
}
let mapStateToProps = (state) =>{
    return {
        bookingDetails: state.bookingDetailsPage.bookingDetails,
        isLoading: state.bookingDetailsPage.isLoading,
        isDelete: state.bookingDetailsPage.isDelete
    }
}
let WithUrlDataContainerComponent = withRouter(BookingDetailsContainer);
export default connect(mapStateToProps, {getBookingsDetailsThunk, deleteBookingPage})(WithUrlDataContainerComponent)
