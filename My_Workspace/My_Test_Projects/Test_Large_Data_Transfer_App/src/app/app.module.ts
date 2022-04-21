import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './HomeView/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SendGetRequestComponent } from './send-get-request/send-get-request.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SendPostRequestComponent } from './send-post-request/send-post-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    SendGetRequestComponent,
    SendPostRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path :'home', component : HomeComponent},
      {path :'send-get-request', component : SendGetRequestComponent},
      {path :'send-post-request', component : SendPostRequestComponent},
      {path :'contact-us', component : ContactUsComponent},
      {path : '', redirectTo : 'home', pathMatch: 'full'},
      {path : '**', redirectTo : 'home', pathMatch: 'full'}
    ]),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
