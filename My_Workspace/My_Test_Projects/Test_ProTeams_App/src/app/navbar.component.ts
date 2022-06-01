import { Component } from "@angular/core";

@Component({
  selector : 'navbar-component',
  templateUrl : './navbar.component.html',
  styles : [ `li > a.nav-link.active { color : white; }`]
})

export class NavbarComponent {

}
