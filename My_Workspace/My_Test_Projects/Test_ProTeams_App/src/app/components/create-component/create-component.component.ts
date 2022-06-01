import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './create-component.component.html'
})

export class CreateComponentComponent {
  isDirty:boolean = false;
  constructor(private router : Router) {

  }
  cancel() {
    console.log("cancel is called");
    this.router.navigate(['/components']);
  }
}
