import React from "react"
import { connect } from "react-redux";
import { getBuildingsThunk, getAudiencesThunk } from "../../reducers/BuildingReducer";
import ChooseAudiencePage from "./ChooseAudiencePage";

class ChooseAudienceContainer extends React.Component {
    componentDidMount(){
        this.props.getBuildingsThunk();
      }
      render(){
        return (<div>
          <ChooseAudiencePage {...this.props} getAudiences={this.props.getAudiencesThunk}/>
        </div>)
      }
}
let mapStateToProps = (state) =>{
    return {
        buildings: state.buildingPage.building, 
        audiences: state.buildingPage.audiences
    }
}

export default connect(mapStateToProps, {getBuildingsThunk, getAudiencesThunk})(ChooseAudienceContainer);