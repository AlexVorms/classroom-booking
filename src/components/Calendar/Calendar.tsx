import {
    Calendar as BigCalendar,
    CalendarProps,
    momentLocalizer,
  } from "react-big-calendar";
  import moment from "moment";
  import 'moment/locale/ru'
import React from "react";
import "../../index.css"
import {EVENTS} from "./CustomCalendar/CustomCalendar.constants.tsx"


 const messages = { // new
  allDay: 'День',
  previous: 'Предыдущий',
  next: 'Следующий',
  today: 'Сeгодня',
  month: 'Месяц',
  week: 'Неделя',
  day: 'День',
  agenda: 'События дня',
  date: 'Дата',
  time: 'Время',
  event: 'Событие',
};

  const localizer = momentLocalizer(moment);
  
  export const Calendar = (props: Omit<CalendarProps, "localizer">) => {
    return (
      <BigCalendar
        {...props}
        events = {EVENTS}
        localizer={localizer}
        messages={messages} 
        defaultDate={"2022-10-10"}
        defaultView={"week"}
        max={moment("2022-10-10T16:00:00").toDate()}
        min={moment("2022-10-10T08:00:00").toDate()}
      />
    );
  };

  