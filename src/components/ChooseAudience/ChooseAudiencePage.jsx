import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
            <div>
            <Container style={{marginTop:"20px"}}>
                 <Card>

                    <Card.Body>
                        
                            
                            <div style={{textAlign:"center", color:"#5161ce", fontSize: "25px"}}>Расписание аудиторий</div> 
                          
                       
                           
                            <Form.Select aria-label="Default select example" onChange={this.callThis} style={{fontWeight:"600"}}>
                            <option>Выбрать корпус</option>
                            {this.props.buildings.map((build) => {
                    return <option value={build.id} key = {build.id}>{build.name}</option>  
                })
                }
                         </Form.Select>
                      
                    
                        
                         {this.state.getAudiences?<div> <Form.Select aria-label="Default select example" style={{marginTop:"20px",fontWeight:"600" }} onChange={this.chooseAudience}>
                            <option>Выбрать аудиторию</option>
                            {this.props.audiences.map((audience) => {
                    return <option value={audience.id} key = {audience.id}>{audience.name}</option>})}
                        </Form.Select>
                        <NavLink to = {'/calendar/' + this.state.selectAudiences} style={{ textDecoration: 'none', color: 'inherit' }}> 
                        <Button style={{marginTop:"20px", background:"#5161ce"}}>Показать календарь</Button></NavLink></div>: <></>}
                        
                    </Card.Body>
                  </Card>
            </Container>
            <img src=".\NotFound.png" style={{position:"absolute", bottom:"0", right:"0", height:"30%" }}/>
            </div>
           
        )
    }
}

export default ChooseAudiencePage;