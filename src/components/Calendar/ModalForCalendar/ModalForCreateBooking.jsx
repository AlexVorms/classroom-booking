import {Form, Col, Row} from 'react-bootstrap'
import { useState} from 'react'
import React from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
import { Button, Modal } from 'antd';
import { render } from '@testing-library/react';
import { useEffect } from 'react';

class ModalForCreatingBooking extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        timeout:"2023-10-10",
        timeStart:"18:10",
        timeEnd:"18:10",
        text: "",
        title:"",
        participantCount: 0
      };
    this.convert = this.convert.bind(this);
    this.StartConvert = this.StartConvert.bind(this);
    this.EndConvert = this.EndConvert.bind(this);
    this.AddBooking = this.AddBooking.bind(this);
  }
        convert(str) {
          var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
          this.setState({timeout:[date.getFullYear(), mnth, day].join("-")});
        }
        StartConvert(event) {

          if(event !== null){

            var date = new Date(event.$d),
            hours = ("0" + date.getHours()).slice(-2),
            minutes = ("0" + date.getMinutes()).slice(-2);

            this.setState({timeStart:[hours, minutes].join(":")});
          }
          else{
            this.setState({timeStart:"00:00"});
          }
        }

        EndConvert(event) {
          if(event !== null){
              var date = new Date(event.$d),
              hours = ("0" + date.getHours()).slice(-2),
              minutes = ("0" + date.getMinutes()).slice(-2);
            
              this.setState({timeEnd:[hours, minutes].join(":")});
          }
          else{
            this.setState({timeEnd:"00:00"});
          }
        }
        AddBooking(){
          var date = {
            AudienceId: this.props.AudienceId,
            date: this.state.timeout,
            title: this.state.title,
            participantCount: 20,
            start: this.state.timeStart,
            end: this.state.timeEnd,
            userId: "31298ace-27ed-4b8c-82e8-47dfa05c58e0",
            description: this.state.text
          }
          this.props.AddBookingThunk(date)
        }
    render(){
      return(
        <>
        {this.props.Event != undefined?
        <Modal  open={this.props.show} onOk={this.AddBooking} 
        onCancel={this.props.onHide}  title = "Забронировать аудиторию"
        style={{ top: 20 }}>
          
                  <Form style={{ marginTop: '20px' }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Row>
                      <Col sm="1">
                      <img src='../../ic32-calendar.png'></img>
                      </Col>
                      <Col sm="6">
                      <Form.Control type="date" value={this.state.timeout} onChange={(e) => this.convert(e.target.value)} style={{borderColor:"gray", color:"gray", fontSize:'600'}}/>
                      </Col>
                      <Col>
                      <TimePicker  efaultValue={dayjs(this.state.timeStart, 'HH:mm')} onChange={(e) => this.StartConvert(e)} format={'HH:mm'} />
                      </Col>
                      <Col>
                      <TimePicker  efaultValue={dayjs(this.state.timeEnd, 'HH:mm')} onChange={(e) => this.EndConvert(e)} format={'HH:mm'} />
                      </Col>
              
                    </Row>
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Row>
                        <Col sm="1">
                        <img src='../../ic32-company.png'></img>
                        </Col>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={this.props.audience} style={{ color:"grey", fontWeight:"600", fontSize:"20px"}}/>
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
                  <Form.Control onChange={(e) => this.setState({title: e.target.value})}></Form.Control>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
                <Row>
                <Col sm="1">
                      <img src='../../ic32-user.png'></img>
                      </Col>
                  <Col sm="4">
                  <div onChange={(e) => this.setState({participantCount: Number(e.target.value)})}>Кол-во участников:</div>
                  </Col>
                  <Col sm="7">
                  <Form.Control></Form.Control>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group style={{marginTop:"20px", color:"grey", fontWeight:"600", fontSize:"20px"}}>
                <Row>
                <Col sm="1">
                      <img src='../../ic32-user.png'></img>
                      </Col>
                  <Col sm="4">
                  <div>Описание мероприятия:</div>
                  </Col>
                  <Col sm="7">
                  <Form.Control as="textarea" rows={3} onChange={(e) => this.setState({text: e.target.value})} />
                  </Col>
                </Row>
              </Form.Group>
              
                  </Form>
          
                </Modal> : <></>}
              </>
            )
        }
    }
export default ModalForCreatingBooking;