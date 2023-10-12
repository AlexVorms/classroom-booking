import { Card, Col, Container,Row } from "react-bootstrap"
import {Input, QRCode, Button} from 'antd';
import {useState} from 'react';
import LoadSpinner from "../other/LoadSpinner";
import { Divider } from 'antd';
import { Avatar, List,  Popover} from 'antd';
import ModalForDeleteBooking from "./ModalForDeleteBooking";

function BookingDetails(props){

  const convert = (str) => {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2),
    hours = ("0" + date.getHours()).slice(-2),
    minutes = ("0" + date.getMinutes()).slice(-2);

    var value = [date.getFullYear(), mnth, day].join("-") + " " + [hours, minutes].join(":")
    return value;
  }

  const DateConvert = (str) => {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);

    var value = [date.getFullYear(), mnth, day].join("-")
    return value;
  }

  const TimeConvert = (str) => {
    var date = new Date(str),
    hours = ("0" + date.getHours()).slice(-2),
    minutes = ("0" + date.getMinutes()).slice(-2);

    var value = [hours, minutes].join(":")
    return value;
  }
const data = [
  {
    title: 'Мероприятие',
    value: `${props.bookingDetails.title}`,
    src : "../edit.png"
  },
  {
    title: 'Дата бронирования',
    value: `${DateConvert(props.bookingDetails.date)}  c  ${TimeConvert(props.bookingDetails.start)} до ${TimeConvert(props.bookingDetails.end)}`,
    src : "../time.png"
  },
  {
    title: 'Аудитория',
    value: `${props.bookingDetails.audience.name}`,
    src : "../company.png"
  },
  {
    title: 'Корпус',
    value: `Название: ${props.bookingDetails.audience.building.name} ---- Адрес: ${props.bookingDetails.audience.building.address}`,
    src : "../map.png"
  },
  {
    title: 'Количество участников',
    value: `${props.bookingDetails.participantCount}`,
    src : "../user.png"
  },
  {
    title: 'Дата создания заявки',
    value: `${convert(props.bookingDetails.createdAt)}`,
    src : "../calendar.png"
  },
];

const contentForStatus = (
  <div>
    <p>Ваша заявка находится в процессе обработки</p>
    <p>Запрос будет рассматриваться в течении 1-2 рабочих дней</p>
  </div>
);
const GetMessage = () =>{
  var result = ''
  props.bookingDetails.bookingFields.map(a=>{
    if(a.type === 'ResponseBooking'){
      result = a.value
    }
  })
  return result;
}

const GetTime = () =>{
  var result = ''
  props.bookingDetails.bookingFields.map(a=>{
    if(a.type === 'ResponseBooking'){
      result = a.date
    }
  })

  return convert(result);
}
const contentForApprovedStatus = (
  <div style={{}}>
    <p>{GetMessage()}</p>
    <p style={{textAlign:"end"}}>{GetTime()}</p>
  </div>
);

const contentForCanceledStatus = (
  <div>
    <p>{GetMessage()}</p>
    <p style={{textAlign:"end"}}>{GetTime()}</p>
  </div>
);

    const downloadQRCode = () => {
        const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
        if (canvas) {
          const url = canvas.toDataURL();
          const a = document.createElement('a');
          a.download = 'QRCode.png';
          a.href = url;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      };

    return(
        <Container>
          {props.isLoading? <LoadSpinner></LoadSpinner>:
            <Card style={{marginTop:"30px"}}>
              <Row>
                <Col sm='3'>
                <hr style={{background:"#5161ce", border: "none", height:"20px"}}></hr>
                </Col>
                <Col>
                <div style={{textAlign:"center", color:"#5161ce", fontSize: "30px", fontWeight:"600"}}>Информация о бронировании</div> 
                </Col>
                <Col sm='3'>
                <hr style={{background:"#5161ce", border: "none", height:"20px"}}></hr>
                </Col>
              </Row>
           <Row>
            <Col style={{marginLeft:"20px"}}>
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.src} />}
                  title={<div>{item.title}</div>}
                  description={item.value}
                />
              </List.Item>
            )}/>
            </Col>
            <Col sm="3">
              <div><div style={{fontWeight: "600"}}>Статус:  </div>      
            {props.bookingDetails.status == "New"? 
              <Popover content={contentForStatus} title="Детали">
                  <Button type="primary" style={{ background:"#4e73e5", fontWeight:"600"}}> СОЗДАНО</Button>
              </Popover>
            : <></>}
              {props.bookingDetails.status == "Approved"? 
              <Popover content={contentForApprovedStatus} title="Детали">
                  <Button type="primary" style={{ background:"#17d1bd",  fontWeight:"600"}}> ПРИНЯТО</Button>
              </Popover>
            : <></>}
            {props.bookingDetails.status == "Canceled"? 
              <Popover content={contentForCanceledStatus} title="Детали">
                  <Button type="primary" style={{ background:"#FFC868",  fontWeight:"600"}}> ОТКЛОНЕНО</Button>
              </Popover>
            : <></>}
            </div>


            <ModalForDeleteBooking deleteBookingPage = {props.deleteBookingPage} id={props.bookingDetails.id}/>


            {props.bookingDetails.status == "Approved"? 
           <div id="myqrcode" style={{marginTop:"20px"}}>
                <QRCode value={props.match.params.id || '-'} />
                <Button type="primary" onClick={downloadQRCode} ghost style={{marginTop:"20px"}}>
                Скачать QR-код
                </Button>
            </div> : <></>}
            </Col>
            </Row>
            <div style={{marginLeft:"20px"}}>
            <Divider orientation="left">Описание</Divider>
            <p>{props.bookingDetails.description}</p>
            </div>
            </Card>
          }
        </Container>
    )
}

export default BookingDetails