import React from 'react';
import MyBookingPage from './MyBookingPage';
import { connect } from "react-redux";
import {getMyBookingsThunk} from "../../reducers/MyBookingReducer"

class MyBookingPageContainer extends React.Component {
    componentDidMount(){
        this.props.getMyBookingsThunk();
    }
    render(){
        return (
        <MyBookingPage {...this.props}></MyBookingPage>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        bookings: state.bookingPage.mybookings,
        isLoading: state.bookingPage.isLoading
    }
}

export default connect(mapStateToProps, {getMyBookingsThunk})(MyBookingPageContainer );