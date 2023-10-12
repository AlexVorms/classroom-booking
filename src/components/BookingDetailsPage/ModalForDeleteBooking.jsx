
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {Button} from 'antd';

function ModalForDeleteBooking(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteBooking = () => {
        props.deleteBookingPage(props.id)
    }
    return (
      <>
         <Button type="dashed" danger style={{marginTop:"20px"}} onClick={handleShow} >
                ОТМЕНИТЬ
                </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{background:"red", color:"white"}}>
            <Modal.Title >Отмена бронирования</Modal.Title>
          </Modal.Header>
          <Modal.Body>Вы действительно хотите отменить бронирование аудитории?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Нет
            </Button>
            <Button variant="danger" danger onClick={deleteBooking}>
             Отменить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default ModalForDeleteBooking;