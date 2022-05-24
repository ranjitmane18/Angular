import { Component } from '@angular/core';

@Component({
  selector: 'components-app-root',
  template: `
  <navbar-component></navbar-component>
  <router-outlet></router-outlet>`
})
export class ComponentsAppComponent {
  title = 'Test_Angular_Fundamentals_App';
}
