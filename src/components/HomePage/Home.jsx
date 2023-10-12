import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function HomePage(){
    const myStyle={
        backgroundImage: "linear-gradient(to bottom,#5161ce 0, #aab4f7 100%)",
        height:'100vh'
    }
    const imageStyle={
        position:'absolute', left:'800px', color:'white', top: '100px',
        height:'60vh', filter: 'brightness(70%)'
    }
    const imageStyle2={
       
        left:'700px',
        position:'absolute',
      
    }
    return(
        <div className="home" style={myStyle}>
            <h1 style={{position:'absolute', top:'150px', left:'70px', color:'white', zIndex:'9999', fontSize:'60px', fontWeight:'600', }}>Бронирование аудиторий</h1>
            
            <Card style={{ width: '30rem', top: "250px", left:'70px', background: '#000', opacity:'0.4', color:'white' }}>
      <Card.Body>
        <Card.Title>Добро пожаловать</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          С помощью Classroom-Booking вы можете быстро и легко забронировать аудиторию вашего факультета.
        </Card.Text>
      </Card.Body>
    </Card>
    <Button href="/audience" variant="outline-light" style={{top:"460px", left:"70px", position:"absolute"}} >Начать работу </Button>
            <img src=".\hero-header.png" style={imageStyle2}/>
        </div>
    )
}
export default HomePage