import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToastService } from './common/toastr.service';
import { ForecastAppComponent } from './forecast-app.component';
import { ForecastThumbnailComponent } from './Forecasts/forecast-thumbnail.component';
import { ForecastsComponent } from './Forecasts/forecasts.component';
import { ForecastService } from './Forecasts/shared/forecast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ForecastAppComponent,
    ForecastsComponent,
    ForecastThumbnailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ForecastService, ToastService],
  bootstrap: [ForecastAppComponent]
})
export class AppModule { }
