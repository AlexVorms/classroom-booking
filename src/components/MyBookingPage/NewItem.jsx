import React from 'react';

class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeStart:"",
            timeEnd:"",
            date:"",
            month:""
        }
        this.getTime = this.getTime.bind(this);
    }
    componentDidMount(){
        this.getTime();
    }
    getTime(){
        var date = new Date(this.props.booking.start),
        hours = ("0" + date.getHours()).slice(-2),
        minutes = ("0" + date.getMinutes()).slice(-2); 
        this.setState({timeStart:[hours, minutes].join(":")});

        var date2 = new Date(this.props.booking.end),
        hours2 = ("0" + date2.getHours()).slice(-2),
        minutes2 = ("0" + date2.getMinutes()).slice(-2);
        this.setState({timeEnd:[hours2, minutes2].join(":")});

        var date3 = new Date(this.props.booking.date),
        day = ("0" + date3.getDate()).slice(-2);
        this.setState({date:day});

        const date4 = new Date(this.props.booking.date);  // 2009-11-10
        const month4 = date4.toLocaleString('default', { month: 'short' });
        this.setState({month:month4});
    }
    render(){
        return(
            <div className="col-lg-4">
        <div className="card card-margin">
            
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">{this.state.date}</span>
                            <span className="widget-49-date-month">{this.state.month}</span>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">{this.props.booking.title}</span>
                            <span className="widget-49-meeting-time">с {this.state.timeStart} до {this.state.timeEnd} </span>
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
        )
    }
}
export default NewItem;