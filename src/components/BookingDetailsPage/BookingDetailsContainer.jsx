import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux"
import BookingDetails from './BookingDetails';

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class BookingDetailsContainer extends React.Component {
    render(){
        return(<BookingDetails {...this.props}/>)
    }
}
let mapStateToProps = (state) =>{
    return {
       array: state.shedulePage.array
    }
}
let WithUrlDataContainerComponent = withRouter(BookingDetailsContainer);
export default connect(mapStateToProps, {})(WithUrlDataContainerComponent)
