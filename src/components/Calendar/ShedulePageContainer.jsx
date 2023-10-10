import React from "react"
import DragAndDrop from "./CustomCalendar/DrapAndDrop"
import { connect } from "react-redux"
import { getSheduleThunk, AddBookingThunk } from "../../reducers/SheduleReducer"
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 
class ShedulePageContainer extends React.Component {
    
    componentDidMount(){
        var curr = new Date; 
        var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6
        var firstday = new Date(curr.setDate(first)).toUTCString();
        var lastday = new Date(curr.setDate(last)).toUTCString();

        this.props.getSheduleThunk(this.props.match.params.id, this.convert(firstday), this.convert(lastday))
    }
    convert = (str) =>{
        var date = new Date(str)
          var mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2)
        return [date.getFullYear(), mnth, day].join("-");
      }

    render(){
        return (
            <DragAndDrop {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
       array: state.shedulePage.array,
       audiences: state.buildingPage.audiences
    }
}
let WithUrlDataContainerComponent = withRouter(ShedulePageContainer);
export default connect(mapStateToProps, {getSheduleThunk, AddBookingThunk})(WithUrlDataContainerComponent)