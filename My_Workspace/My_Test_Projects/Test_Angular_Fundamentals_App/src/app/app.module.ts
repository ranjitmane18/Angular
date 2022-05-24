import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsAppComponent } from './component-app.component';
import { ComponentListComponent } from './component-list.component';
import { ComponentThumbnailComponent } from './component-thumbnail.component';
import { NavbarComponent } from './navbar.component';
import { ComponentService } from 'src/shared/component.service';
import { ToastService } from 'src/shared/toast.service';
import { ComponentDetailsComponent } from './component-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/shared/routes';
import { CreateComponentComponent } from './create-component.component';

@NgModule({
  declarations: [
    ComponentsAppComponent,
    ComponentListComponent,
    ComponentThumbnailComponent,
    NavbarComponent,
    ComponentDetailsComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ComponentService, ToastService ],
  bootstrap: [ComponentsAppComponent]
})
export class AppModule { }
