import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector : 'event-thumbnail',
  template : `
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
<div class="d-flex justify-content-start">
    <small class="text-muted">Venue : {{event.location.city}}!!</small>
    <button class="btn btn-success btn-sm rounded ms-start" (click)="onClick()">Register Here!</button>
  </div>
</div>
`
})

export class EventThumbnailCompoent {
  @Input() event : any;
  eventTicketPrice : any = 10;
  @Output() registerEventEmmiter = new EventEmitter();
  onClick() {
    this.registerEventEmmiter.emit('You are successfully registered to this event');
  }

  logMessage() {
    console.log("logMessage is called");
  }
}
