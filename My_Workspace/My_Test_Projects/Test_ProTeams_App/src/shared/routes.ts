import {Routes } from '@angular/router';

import { ComponentDetailsComponent } from 'src/app/components/component-details/component-details.component';
import { ComponentRouteActivator } from 'src/app/components/component-details/component-route-activator.service';
import { ComponentListComponent } from 'src/app/components/component-list/component-list.component';
import { CreateComponentComponent } from 'src/app/components/create-component/create-component.component';
import { Error404Component } from 'src/app/errors/404.component';

export const appRoutes : Routes = [
  { path : 'components/new', component : CreateComponentComponent, canDeactivate : ['canDeactivateCreateEvent'] },
  { path : 'components', component : ComponentListComponent },
  { path : 'components/:id', component: ComponentDetailsComponent, canActivate: [ComponentRouteActivator] },
  { path : '', redirectTo : 'components', pathMatch : 'full' },
  { path : '404' , component : Error404Component},
];
