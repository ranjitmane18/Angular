import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ComponentService } from "src/shared/component.service";

@Component({
  templateUrl : './component-details.component.html'
})

export class ComponentDetailsComponent {

  component : any;

  constructor(private componentService : ComponentService, private route : ActivatedRoute) {

  }

  ngOnInit() {
    //use ActivatedRoute service to get parameter from URL
    // the id should match with the 'id' specified in the route of route.ts
    this.component = this.componentService.getComponent(+this.route.snapshot.params['id']);
  }
}
