import {Routes } from '@angular/router';
import { ComponentDetailsComponent } from 'src/app/component-details.component';
import { ComponentListComponent } from "src/app/component-list.component";

export const appRoutes : Routes = [
  { path : 'components', component : ComponentListComponent },
  { path : 'components/:id', component: ComponentDetailsComponent },
  { path : '', redirectTo : '/components', pathMatch : 'full' }
];
