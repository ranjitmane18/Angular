import {Routes } from '@angular/router';
import { ComponentListComponent } from "src/app/component-list.component";
import { ComponentDetailsComponent } from 'src/app/components/component-details/component-details.component';
import { ComponentRouteActivator } from 'src/app/components/component-details/component-route-activator.service';
import { CreateComponentComponent } from 'src/app/create-component.component';
import { Error404Component } from 'src/app/errors/404.component';

export const appRoutes : Routes = [
  { path : 'components/new', component : CreateComponentComponent },
  { path : 'components', component : ComponentListComponent },
  { path : 'components/:id', component: ComponentDetailsComponent, canActivate: [ComponentRouteActivator] },
  { path : '404' , component : Error404Component},
  { path : '', redirectTo : '/components', pathMatch : 'full' }
];
