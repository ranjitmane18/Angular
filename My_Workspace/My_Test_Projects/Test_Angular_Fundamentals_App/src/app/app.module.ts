import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsAppComponent } from './component-app.component';
import { ComponentListComponent } from './component-list.component';
import { ComponentThumbnailComponent } from './component-thumbnail.component';
import { NavbarComponent } from './navbar.component';
import { ComponentService } from 'src/shared/component.service';
import { ToastService } from 'src/shared/toast.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/shared/routes';
import { CreateComponentComponent } from './create-component.component';
import { Error404Component } from './errors/404.component';
import { ComponentDetailsComponent } from './components/component-details/component-details.component';
import { ComponentRouteActivator } from './components/component-details/component-route-activator.service';

@NgModule({
  declarations: [
    ComponentsAppComponent,
    ComponentListComponent,
    ComponentThumbnailComponent,
    NavbarComponent,
    ComponentDetailsComponent,
    CreateComponentComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ComponentService, ToastService, ComponentRouteActivator ],
  bootstrap: [ComponentsAppComponent]
})
export class AppModule { }
