import {Routes } from '@angular/router';
import { ComponentDetailsComponent } from 'src/app/component-details.component';
import { ComponentListComponent } from "src/app/component-list.component";
import { CreateComponentComponent } from 'src/app/create-component.component';

export const appRoutes : Routes = [
  { path : 'components/new', component : CreateComponentComponent },
  { path : 'components', component : ComponentListComponent },
  { path : 'components/:id', component: ComponentDetailsComponent },
  { path : '', redirectTo : '/components', pathMatch : 'full' }
];
