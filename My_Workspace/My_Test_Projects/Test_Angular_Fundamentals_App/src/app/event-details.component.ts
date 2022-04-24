import { Component } from "@angular/core";
import { ComponentService } from "src/shared/component.service";

@Component({
  templateUrl : './event-details.component.html'
})

export class EventDetailsComponent {

  component : any;

  constructor(private componentService : ComponentService) {

  }

  ngOnInit() {
    this.component = this.componentService.getComponent(1);
  }
}
