import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsAppComponent } from './component-app.component';

import { ComponentThumbnailComponent } from './components/component-thumbnail/component-thumbnail.component';
import { NavbarComponent } from './navbar.component';
import { ComponentService } from 'src/shared/component.service';
import { ToastService } from 'src/shared/toast.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/shared/routes';
import { Error404Component } from './errors/404.component';
import { ComponentDetailsComponent } from './components/component-details/component-details.component';
import { ComponentRouteActivator } from './components/component-details/component-route-activator.service';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';


@NgModule({
  declarations: [
    ComponentsAppComponent,
    ComponentListComponent,
    ComponentThumbnailComponent,
    NavbarComponent,
    ComponentDetailsComponent,
    CreateComponentComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    ComponentService,
    ToastService,
    ComponentRouteActivator,
    { provide : 'canDeactivateCreateEvent', useValue : checkDirtyState }
  ],
  bootstrap: [ComponentsAppComponent]
})

export class AppModule { }

export function checkDirtyState(component : CreateComponentComponent) {
  if(component.isDirty) 
  {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
