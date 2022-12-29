import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToastService } from './common/toastr.service';
import { ForecastAppComponent } from './forecast-app.component';
import { ForecastService } from './common/forecast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ForecastDetails } from './forecasts/forecast-details/forecast-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

import { Error404Component } from './error/404.component';
import { ForecastRouteActivator } from './shared/forecast-route-activator.service';
import { ForecastListResolver } from './shared/forecast-list-resolver.service';
import { ForecastsComponent } from './forecasts/forecasts/forecasts.component';
import { ForecastThumbnailComponent } from './forecasts/forecast-thumnail/forecast-thumbnail.component';
import { CreateForecastComponent } from './forecasts/create-forecast/create-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastAppComponent,
    ForecastsComponent,
    ForecastThumbnailComponent,
    ForecastDetails,
    CreateForecastComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ForecastService,
    ToastService,
    ForecastRouteActivator,
    ForecastListResolver
    ],
  bootstrap: [ForecastAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateForecastComponent) {
  if(component.isDirty) {
    return window.confirm("Do you really want to leave this page");
  }
  return false;
}
