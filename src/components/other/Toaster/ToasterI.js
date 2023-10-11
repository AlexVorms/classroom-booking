import {Slide, ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {toastError, toastInfo, toastSuccess} from "./toaster";


const Toaster = (props) => {

    useEffect(() => {
        if (!props.isWasShow && props.toastType === "TOAST_SUCCESS") {
            toastSuccess(props.message);
            props.setWasShow();
        }
        else if (!props.isWasShow && props.toastType === "TOAST_ERROR") {
            toastError(props.message);
            props.setWasShow();
        }
        else if (!props.isWasShow && props.toastType === "TOAST_INFO") {
            toastInfo(props.message);
            props.setWasShow();
        }

    }, [props.isWasShow])

    return (
        <div>
            <ToastContainer
                transition = {Slide}
                position = "top-left"
                hideProgressBar={true}
            />
        </div>
    )
}

export default Toaster;