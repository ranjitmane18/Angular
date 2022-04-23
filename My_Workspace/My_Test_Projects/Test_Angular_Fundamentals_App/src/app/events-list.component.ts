import { Component } from "@angular/core";

@Component({
  selector : 'events-list',
  template : `
  <div class="bg-success">
      <h1 class="fs-2 text-center p-2">Upcoming Angular Events</h1>
      <hr />
      <h4 class="text-center p-2">{{event.name}}</h4>
  </div>
  <div class="card w-25 bg-info">
    <img src="{{event.imageUrl}}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">Angular Event at India</h5>
      <p class="card-text">
        1. Angular CLI
        2. Angular Forms
        3. Angular RxJs
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Venue : {{event.location.city}}!!</small>
    </div>
  </div>`
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
}
