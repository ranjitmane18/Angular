import { Component } from "@angular/core";

@Component({
  selector : 'events-list',
  template : `
  <h1 class="fs-2 text-center p-2">Upcoming Angular Events</h1>
  <hr />
  <event-thumbnail [event]="event" (registerEventEmmiter)="handleRegisterEvent($event)"> </event-thumbnail>`
})

export class EventListComponent {
  event = {
    id : 1,
    name : 'Angular Connect',
    date : '9/26/2036',
    time : '10:36 AM',
    imageUrl : '/assets/images/sample-image.png',
    location : {
      address : '1057 DT',
      city : 'London',
      country : 'England'
    }
  }

  handleRegisterEvent(evData : any) {
    console.log(`Event data received from the child component : ${evData}`);
  }
}
