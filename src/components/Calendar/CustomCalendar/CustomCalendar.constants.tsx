import moment from "moment";
import { EventItem } from "./CustomCalendar.types";


export enum AppointmentStatusCode {
  Pending = "P",
  CheckedIn = "CI",
}

export const EVENT_STATUS_COLORS = {
  P: "#5272E9",
  CI: "#5272E9",
};

export const EVENTS: EventItem[] = [
  {
    start: moment("2023-10-08T10:35:00").toDate(),
    end: moment("2023-10-08T12:10:00").toDate(),
    data: {
      appointment: {
        id: 1,
        status: "P",
        type: "Английский язык",
        lessonNumber: 1,
        title: "Building 5\nStreet 44\nNear Express Highway\nNew York",
        lessonType: "",
        professor:{
          id:"",
          fullName:"",
          shortName:""
      },
      audience:{
        id:"",
        name:"",
        shortName:"",
        building:{
            id:"",
            name:"",
            address:"",
            latitude: 0.0,
            longitude: 0.0
        }
    }
      },
    }
  },
  {
    start: moment("2023-10-04T09:00:00").toDate(),
    end: moment("2023-10-04T14:59:59").toDate(),
    data: {
      blockout: {
        id: 1,
        name: "Праздничный день",
      },
    },
  },
];