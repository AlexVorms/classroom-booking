
  
  export type Appointment = {
        id: number,
        status: string,
        type: string,
        lessonNumber: number,
        title: string,
        lessonType: string,
        professor:{
          id:string,
          fullName:string,
          shortName:string
        },
        audience:{
          id:string,
          name:string,
          shortName:string,
          building:{
              id:string,
              name:string,
              address:string,
              latitude: number,
              longitude: number
          }
      }
  }
  export type Blockout = { id: number; name: string };
  
  export type EventItem = {
    start: Date;
    end: Date;
    data?: { appointment?: Appointment; blockout?: Blockout };
    isDraggable?: boolean;
  };