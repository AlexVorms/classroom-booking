import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'

class ChooseAudiencePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectValue: '',
            selectAudiences:'',
            getAudiences: false
          };

    }
    callThis = (e) => {
     
        this.setState({getAudiences:false});
        this.setState({selectValue: e.target.value});
        this.props.getAudiences(e.target.value);
        this.setState({getAudiences:true});
      }

    chooseAudience = (e) => {
        this.setState({selectAudiences: e.target.value})
    }
    render(){
        return(
            <Container style={{marginTop:"20px"}}>
                 <Card>
                    <Card.Header> <Card.Title style={{textAlign:"center", color:"#5161ce", fontSize: "25px"}}>Расписание аудиторий</Card.Title> </Card.Header>
                    <Card.Body>
                        <Form.Select aria-label="Default select example" onChange={this.callThis} style={{fontWeight:"600"}}>
                            <option>Выбрать корпус</option>
                            {this.props.buildings.map((build) => {
                    return <option value={build.id} key = {build.id}>{build.name}</option>  
                })
                }
                         </Form.Select>
                         {this.state.getAudiences?<div> <Form.Select aria-label="Default select example" style={{marginTop:"20px",fontWeight:"600" }}>
                            <option>Выбрать аудиторию</option>
                            {this.props.audiences.map((audience) => {
                    return <option value={audience.id} key = {audience.id}>{audience.name}</option>})}
                        </Form.Select>
                        <Button style={{marginTop:"20px"}}>Показать календарь</Button></div>: <></>}
                        
                    </Card.Body>
                  </Card>
            </Container>
           
        )
    }
}

export default ChooseAudiencePage;