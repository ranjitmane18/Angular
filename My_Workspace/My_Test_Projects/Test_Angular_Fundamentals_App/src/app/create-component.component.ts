import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './create-component.component.html'
})

export class CreateComponentComponent {

  constructor(private router : Router) {

  }
  cancel() {
    this.router.navigate(['/components']);
  }
}
