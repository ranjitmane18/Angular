import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ComponentService } from "src/shared/component.service";

@Component({
  templateUrl : './event-details.component.html'
})

export class EventDetailsComponent {

  component : any;

  constructor(private componentService : ComponentService, private route : ActivatedRoute) {

  }

  ngOnInit() {
    //use ActivatedRoute service to get parameter from URL
    this.component = this.componentService.getComponent(+this.route.snapshot.params['id']);
  }
}
