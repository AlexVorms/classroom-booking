import React from "react";
import { Container } from "react-bootstrap";

function HomePage(){
    const myStyle={
        backgroundImage: "linear-gradient(to bottom,#5161ce 0,#5161ce 100%)",
        height:'100vh'
    }
    return(
        <div className="home" style={myStyle}>
            <h1 style={{position:'absolute', top:'200px', left:'200px', color:'white'}}>Добро пожаловать!</h1>
            <img src=".\study.jpg" />
        </div>
    )
}
export default HomePage