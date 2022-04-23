import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector : 'event-thumbnail',
  template : `
    <div class="card bg-light w-100 h-100" [hidden]="!component">
      <div class="card-body">
        <h6 class="card-title" [ngSwitch]="component.name">
              <span class="fs-5 me-5">{{component.name}}</span>
              <span *ngSwitchCase="'PSMT'">(Full Stack Web App)</span>
              <span *ngSwitchCase="'ProLog'">(Client-Server App)</span>
              <span *ngSwitchCase="'TDG'">(Web API)</span>
              <span *ngSwitchDefault>(Desktop App)</span>
        </h6>

        <div class="d-flex flex-column">

          <div class="d-flex flex-row p-0 mb-1">
            <label for="component-id" class="w-50">id</label>
            <span id="component-id" class="card-text">{{component.id}}</span>
          </div>

          <div class="d-flex flex-row p-0 mb-1">
            <label for="component-id" class="w-50">owner</label>
            <span id="component-id" class="card-text">{{component.owner}}</span>
          </div>

          <div class="d-flex flex-row p-0 mb-1">
            <label for="component-id" class="w-50">version</label>
            <span id="component-id" class="card-text">{{component.version}}</span>
          </div>

          <div *ngIf="component?.pop">
              <span>pop</span>
              <div class="d-flex flex-row mb-1">
                  <div *ngFor="let people of component.pop" class="w-100">
                      <span class="card-text me-2">{{people.id}}</span>
                      <span class="card-text">{{people.name}}</span>
                  </div>
              </div>
          </div>
        </div>

      </div>

      <div class="card-footer bg-transparent">
        <div class="d-flex">
            <small class="text-muted me-auto">{{component.resource}}</small>
            <!-- <button class="btn btn-success btn-sm rounded" (click)="onClick()">Register Here!</button> -->
        </div>
      </div>
    </div>
`
})

export class EventThumbnailCompoent {
  @Input() component : any;
  eventTicketPrice : any = 10;
  @Output() registerEventEmmiter = new EventEmitter();
  onClick() {
    this.registerEventEmmiter.emit('You are successfully registered to this event');
  }

  logMessage() {
    console.log("logMessage is called");
  }
}


// import { Component, Input, Output, EventEmitter } from "@angular/core";

// @Component({
//   selector : 'event-thumbnail',
//   template : `
// <div class="card w-25 bg-info">
// <img src="{{event.imageUrl}}" class="card-img-top" />
// <div class="card-body">
//   <h5 class="card-title">Angular Event at India</h5>
//   <p class="card-text">
//     1. Angular CLI
//     2. Angular Forms
//     3. Angular RxJs
//   </p>
// </div>
// <div class="card-footer">
// <div class="d-flex justify-content-start">
//     <small class="text-muted">Venue : {{event.location.city}}!!</small>
//     <button class="btn btn-success btn-sm rounded ms-start" (click)="onClick()">Register Here!</button>
//   </div>
// </div>
// `
// })

// export class EventThumbnailCompoent {
//   @Input() event : any;
//   eventTicketPrice : any = 10;
//   @Output() registerEventEmmiter = new EventEmitter();
//   onClick() {
//     this.registerEventEmmiter.emit('You are successfully registered to this event');
//   }

//   logMessage() {
//     console.log("logMessage is called");
//   }
// }
