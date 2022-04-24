import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events-list.component';
import { EventThumbnailCompoent } from './event-thumbnail.component';
import { NavbarComponent } from './navbar.component';
import { ComponentService } from 'src/shared/component.service';
import { ToastService } from 'src/shared/toast.service';
import { EventDetailsComponent } from './event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/shared/routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailCompoent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ComponentService, ToastService ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
