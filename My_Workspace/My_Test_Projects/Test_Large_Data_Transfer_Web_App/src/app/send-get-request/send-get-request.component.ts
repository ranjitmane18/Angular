import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWeatherForecast } from '../common/weatherforecast';
import { RequestService } from '../common/send-request.service';

@Component({
  selector: 'app-send-get-request',
  templateUrl: './send-get-request.component.html',
  styleUrls: ['./send-get-request.component.css']
})


export class SendGetRequestComponent implements OnInit {

  sub! : Subscription;
  weatherForecasts : IWeatherForecast[] = [];
  errorMessage : string = "";

  constructor(private requestService : RequestService) { }

  ngOnInit(): void {
  }

  onGetButtonClicked() : void {

    console.log("onGetButtonClicked is called");
    this.requestService.requestGet().subscribe({
      next: weatherForecasts=> {
        this.weatherForecasts = weatherForecasts;
      },
      error: err => {
        this.errorMessage = err;
        console.log("errro ocurred during getting response", err)}
    });

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is called");
    this.sub.unsubscribe();
  }
}
