import {
    Calendar as BigCalendar,
    CalendarProps,
    momentLocalizer,
  } from "react-big-calendar";
  import moment from "moment";
  import 'moment/locale/ru'
import { useMemo } from "react";
import "../../index.css"
import {EVENTS} from "./CustomCalendar/CustomCalendar.constants"
import { Container } from "react-bootstrap";


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
  
  export const Calendar = (props: Omit<CalendarProps, "localizer">) => {
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
    return (
      <Container style={{marginTop:"20px"}}>
      <BigCalendar
        {...props}
        events = {EVENTS}
        localizer={localizer}
        messages={messages} 
        defaultDate={"2022-10-10"}
        defaultView={"week"}
        max={moment("2022-10-10T16:00:00").toDate()}
        min={moment("2022-10-10T08:00:00").toDate()}
        views={views}
      />
      </Container>
    );
  };

  