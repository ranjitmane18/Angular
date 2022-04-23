import { Component } from "@angular/core";

@Component({
  selector : 'events-list',
  template : `
  <h4 class="text-start mt-2">VPS Pune SW India</h4>
  <hr />
  <div class="row">
      <event-thumbnail class="col-md-3" *ngFor="let component of components" [component]="component">
      </event-thumbnail>
  </div>
`
})

export class EventListComponent {
  components = [
    {
      id : 1,
      name : 'PSMT',
      owner : 'Megha S',
      version : '1.1',
      type : 'Service Tool',
      resource : '3',
      pop : [
        {
          id : 1,
          name : 'ranjit'
        },
        {
          id : 2,
          name : 'megha'
        }
      ]
    },
    {
      id : 2,
      name : 'ProLog',
      owner : 'Sagar K',
      version : '1.1',
      type : 'Service Tool',
      resource : '2',
      pop : [
        {
          id : 1,
          name : 'ranjit'
        },
        {
          id : 2,
          name : 'megha'
        },
        {
          id : 3,
          name : 'sagar'
        }
      ]
    },
    {
      id : 3,
      name : 'TDG',
      owner : 'Sagar K',
      version : '1.0',
      type : 'ProBeam',
      resource : '3',
      pop : [
        {
          id : 1,
          name : 'ranjit'
        },
        {
          id : 2,
          name : 'megha'
        },
        {
          id : 3,
          name : 'sagar'
        }
      ]
    },
    {
      id : 4,
      name : 'ACV',
      owner : 'Vaibhav S',
      version : '1.0',
      type : 'Service Tool',
      resource : '3'
    }
  ];
}


// import { Component } from "@angular/core";

// @Component({
//   selector : 'events-list',
//   template : `
//   <h1 class="fs-2 text-center p-2">Upcoming Angular Events</h1>
//   <hr />
//   <event-thumbnail #thumbnail [event]="event" (registerEventEmmiter)="handleRegisterEvent($event)"> </event-thumbnail>
//   <h5 class="my-2">Event price : {{thumbnail.eventTicketPrice}}</h5>
//   <button class="btn btn-md btn-info rounded mt-2" (click)="thumbnail.logMessage()">Log message using template reference feature </button>`
// })

// export class EventListComponent {
//   event = {
//     id : 1,
//     name : 'Angular Connect',
//     date : '9/26/2036',
//     time : '10:36 AM',
//     imageUrl : '/assets/images/sample-image.png',
//     location : {
//       address : '1057 DT',
//       city : 'London',
//       country : 'England'
//     }
//   }

//   handleRegisterEvent(evData : any) {
//     console.log(`Event data received from the child component : ${evData}`);
//   }
// }
