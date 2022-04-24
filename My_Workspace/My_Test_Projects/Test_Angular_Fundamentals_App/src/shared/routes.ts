import {Routes } from '@angular/router';
import { EventDetailsComponent } from 'src/app/event-details.component';
import { EventListComponent } from "src/app/events-list.component";

export const appRoutes : Routes = [
  { path : 'events', component : EventListComponent },
  { path : 'events/:id', component: EventDetailsComponent },
  { path : '', redirectTo : '/events', pathMatch : 'full' }
];
