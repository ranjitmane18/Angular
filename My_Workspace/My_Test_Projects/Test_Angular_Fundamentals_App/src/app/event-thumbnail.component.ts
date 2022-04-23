import { Component, Input } from "@angular/core";

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
  <small class="text-muted">Venue : {{event.location.city}}!!</small>
</div>
</div>
`
})

export class EventThumbnailCompoent {
  @Input() event : any;
}
