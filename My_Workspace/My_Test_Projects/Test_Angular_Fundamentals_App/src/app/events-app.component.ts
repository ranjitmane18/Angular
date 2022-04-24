import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
  <navbar-component></navbar-component>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'Test_Angular_Fundamentals_App';
}
