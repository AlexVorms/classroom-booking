import {
    Calendar as BigCalendar,
    CalendarProps,
    momentLocalizer,
  } from "react-big-calendar";
  import moment from "moment";
  import 'moment/locale/ru'
import { useMemo, useCallback, useState } from "react";
import "../../index.css"
import {EVENTS} from "./CustomCalendar/CustomCalendar.constants"
import { Container } from "react-bootstrap";
import { Button, Modal } from 'antd';
import {Form, Col, Row} from 'react-bootstrap'
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { Controller, useForm } from 'react-hook-form';

 const messages = { // new
  allDay: 'День',
  previous: '<',
  next: '>',
  today: 'Сeгодня',
  month: 'Месяц',
  week: 'Неделя',
  day: 'День',
  agenda: 'Список мероприятий',
  date: 'Дата',
  time: 'Время',
  event: 'Событие',
};


  const localizer = momentLocalizer(moment);
  
  export const Calendar = (props) => {
    const { defaultDate, views } = useMemo(
      () => ({
        defaultDate: new Date(2015, 3, 1),
        views: {
          day: true,
          week: true
        },
      }),
      []
    )
   ///костыль 

      const [BookingModalShow, setBookingModalShow] = useState(false);
      const [dateTime, setDate] = useState("2023-10-10");
      const [dateStart, setDateStart] = useState("12:00");
      const [dateEnd, setDateEnd] = useState("21:00");
      const {control, handleSubmit,formState:{errors}, getValues 
        } = useForm({
        defaultValues:{
            title: '',
            participantCount: 0,
            description: ''
        }
    });



      const addNewBooking = useCallback(
        (event) => {
          convert(event.start)
          var date = new Date(event.start),
          hours = ("0" + date.getHours()).slice(-2),
          minutes = ("0" + date.getMinutes()).slice(-2);
          setDateStart([hours, minutes].join(":"));

          var date2 = new Date(event.end),
          hours2 = ("0" + date2.getHours()).slice(-2),
          minutes2 = ("0" + date2.getMinutes()).slice(-2);
          setDateEnd([hours2, minutes2].join(":"));
        
          setBookingModalShow(true)
        },
        []
      )


      const StartConvert = (event) => {
        if(event !== null){
          var date = new Date(event.$d),
          hours = ("0" + date.getHours()).slice(-2),
          minutes = ("0" + date.getMinutes()).slice(-2);
          setDateStart([hours, minutes].join(":"));
        }
        else{
          setDateStart("00:00");
        }
      }

      const EndConvert = (event) => {
        if(event !== null){
            var date = new Date(event.$d),
            hours = ("0" + date.getHours()).slice(-2),
            minutes = ("0" + date.getMinutes()).slice(-2);
          
            setDateEnd([hours, minutes].join(":"));
        }
        else{
          setDateEnd("00:00");
        }
      }

      const convert = (str) =>{
        var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        setDate([date.getFullYear(), mnth, day].join("-"));
      }


      const formSubmit = (data) => {
        var date = {
          AudienceId: props.AudienceId,
          date: dateTime,
          title: data.title,
          participantCount: data.participantCount,
          start: dateStart,
          end: dateEnd,
          userId: "31298ace-27ed-4b8c-82e8-47dfa05c58e0",
          description: data.description
        }
        props.AddBookingThunk(date)
        setBookingModalShow(false);

     };
    return (
      
      <Container style={{marginTop:"20px"}}>
      <BigCalendar
        {...props}
        localizer={localizer}
        messages={messages} 
        defaultDate={new Date()}
        onSelectSlot={addNewBooking}
        defaultView={"week"}
        max={moment("2022-10-10T21:00:00").toDate()}
        min={moment("2022-10-10T08:00:00").toDate()}
        views={views}
      />


       <Modal  open={BookingModalShow} onOk={handleSubmit(formSubmit)}
        onCancel={()=>setBookingModalShow(false)}
        style={{ top: 20 }}
        footer={null}>
          <Row>
            <Col sm="1">
            <hr style={{background:"#16A34A", border: "none", height:"20px"}}></hr>
            </Col>
            <Col sm="6">
            <div style={{color:"#16A34A", fontSize:"26px", marginLeft:"30px", fontWeight:"600"}}> Забронировать аудиторию</div>
            </Col>
            <Col sm="5">
            <hr style={{background:"#16A34A", border: "none", height:"20px"}}></hr>
            </Col>
          </Row>
         
                  <Form style={{ marginTop: '20px' }} noValidate>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Row>
                      <Col sm="1">
                      <img src='../../ic32-calendar.png'></img>
                      </Col>
                      <Col sm="6">
                      <Form.Control type="date" value={dateTime} onChange={(e) => convert(e.target.value)} style={{borderColor:"gray", color:"gray", fontSize:'600'}}/>
                      </Col>
                      <Col>
                      <TimePicker  value={dayjs(dateStart, 'HH:mm')} onChange={(e) => StartConvert(e)} format={'HH:mm'} />
                      </Col>
                      <Col>
                      <TimePicker  value={dayjs(dateEnd, 'HH:mm')} onChange={(e) => EndConvert(e)} format={'HH:mm'} />
                      </Col>
              
                    </Row>
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Row>
                        <Col sm="1">
                        <img src='../../ic32-company.png'></img>
                        </Col>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={props.audience} style={{ color:"grey", fontWeight:"600", fontSize:"20px"}}/>
                        </Col>
                      </Row>
                  
                  </Form.Group>

              <Form.Group  style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
                <Row>
                  <Col sm="1">
                      <img src='../../ic32-edit.png'></img>
                      </Col>
                  <Col sm="4">
                  <div>Название мероприятия:</div>
                  </Col>
                  <Col sm="7">
                  <Controller
                                    name = 'title'
                                    control={control}
                                    rules = {{
                                        required: true,
                                        minLength: 1
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                        isInvalid={errors.title}
                                        type="text"
                                        {...field}
                                        
                                    />
                                    )}
                                    />
                                    {errors.title?.type === 'minLength' && (
                                        <Form.Control.Feedback type="invalid">
                                        Минимальная длина 1
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.title?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
                <Row>
                <Col sm="1">
                      <img src='../../ic32-user.png'></img>
                      </Col>
                  <Col sm="4">
                  <div >Кол-во участников:</div>
                  </Col>
                  <Col sm="7">
                  <Controller
                                    name = 'participantCount'
                                    control={control}
                                    rules = {{
                                        required: true,
                                        min: 1,
                                        max: 100
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                        isInvalid={errors.title}
                                        type="number"
                                        {...field}
                                        
                                    />
                                    )}
                                    />
                                    {errors.participantCount?.type === 'min' && (
                                        <Form.Control.Feedback type="invalid">
                                        Минимальное количество участников 1
                                    </Form.Control.Feedback>
                                    )}
                                     {errors.participantCount?.type === 'max' && (
                                        <Form.Control.Feedback type="invalid">
                                        Максимальное количество участников 100
                                    </Form.Control.Feedback>
                                    )}
                                    {errors.participantCount?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
                <Row>
                <Col sm="1">
                      <img src='../../ic32-comment.png'></img>
                      </Col>
                  <Col sm="4">
                  <div>Описание мероприятия:</div>
                  </Col>
                  <Col sm="7">
                  <Controller
                                    name = 'description'
                                    control={control}
                                    rules = {{
                                        required: true
                                    }}
                                    render = {({field}) => (
                                    <Form.Control 
                                    as="textarea"
                                        isInvalid={errors.title}
                                        type="text"
                                        {...field}
                                        
                                    />
                                    )}
                                    />
                                    {errors.description?.type === 'required' && (
                                        <Form.Control.Feedback type="invalid">
                                        Это обязательное поле ввода
                                    </Form.Control.Feedback>
                                    )}
                  </Col>
                </Row>
              </Form.Group>
             
                  </Form>
                  <Button type="dashed" onClick={handleSubmit(formSubmit)} style={{color:"#16A34A", borderColor:"#16A34A", marginLeft:"630px", marginTop:"20px"}}>Забронировать</Button>
                </Modal>
      </Container>
    );
  };

  