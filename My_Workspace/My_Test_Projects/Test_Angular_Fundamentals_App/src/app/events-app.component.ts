import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
  <navbar-component></navbar-component>
  <events-list></events-list>`
})
export class EventsAppComponent {
  title = 'Test_Angular_Fundamentals_App';
}
