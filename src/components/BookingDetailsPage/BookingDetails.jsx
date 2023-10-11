import { Card, Container } from "react-bootstrap"
import {Input, QRCode, Button} from 'antd';
import {useState} from 'react';

function BookingDetails(props){
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
            <Card style={{marginTop:"30px"}}>
           <div id="myqrcode">
                <QRCode value={props.match.params.id || '-'} />
                <Button type="primary" onClick={downloadQRCode}>
                Скачать
                </Button>
            </div>
            </Card>
        </Container>
    )
}

export default BookingDetails