import { Card, Button, Container } from "react-bootstrap";
import "./booking.css"
function MyBookingPage(){
    return (
        <div>
        <div className="container CardPage">
<div className="row">
    <div className="col-lg-4">
        <div className="card card-margin">
            
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">09</span>
                            <span className="widget-49-date-month">сен</span>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">Аудитория 209(2), 2 корпус</span>
                            <span className="widget-49-meeting-time">с 12:00 до 13.30 </span>
                        </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                       <span>Статус: в процессе обработки</span>
                        
                    </ol>
                    <div className="widget-49-meeting-action">
                        <a href="#" className="btn btn-sm btn-flash-border-primary">Детали</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4">
        <div className="card card-margin">
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-warning">
                            <span className="widget-49-date-day">13</span>
                            <span className="widget-49-date-month">окт</span>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">Аудитория 404, здание не найдено</span>
                            <span className="widget-49-meeting-time">с 8:00 до 9.30 </span>
                        </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                       
                     <span>Статус: отклонено (см. детали)</span>
                    </ol>
                    <div className="widget-49-meeting-action">
                        <a href="#" className="btn btn-sm btn-flash-border-warning">Детали</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-4">
        <div className="card card-margin">
          
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-success">
                            <span className="widget-49-date-day">22</span>
                            <span className="widget-49-date-month">мая</span>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">Аудитория 200, 4 корпус</span>
                            <span className="widget-49-meeting-time">с 18:00 до 20.00 </span>
                        </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                        <span>Статус: заявка одобрена</span>
                        
                    </ol>
                    <div className="widget-49-meeting-action button">
                        <a href="#" className="btn btn-sm btn-flash-border-success">Детали</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<img src=".\NotFound.png" style={{position:"absolute", bottom:"0", right:"0", height:"30%" }}/>
</div>
    )
}

export default MyBookingPage;