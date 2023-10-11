import {connect} from "react-redux";
import Toaster from "./ToasterI";
import {setWasShow} from "../../../reducers/ToasterReduser";

let mapStateToProps = (state) => {
    return {
        message: state.toaster.message,
        toastType: state.toaster.toastType,
        isWasShow: state.toaster.isWasShow
    };
}

export default connect(mapStateToProps, {
    setWasShow
})(Toaster);