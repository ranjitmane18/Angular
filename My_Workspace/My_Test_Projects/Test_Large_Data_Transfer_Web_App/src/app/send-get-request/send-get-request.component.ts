import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWeatherForecast } from '../common/weatherforecast';
import { RequestService } from '../common/send-request.service';
import { DatePipe, JsonPipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import sizeof from 'object-sizeof';
import { RequestInfo } from '../common/requestInfo';

@Component({
  selector: 'app-send-get-request',
  templateUrl: './send-get-request.component.html',
  styleUrls: ['./send-get-request.component.css']
})


export class SendGetRequestComponent implements OnInit {

  private sub! : Subscription;
  private requestId : number = 1;

  //public weatherForecasts : IWeatherForecast[] = [];
  public requestInfos : RequestInfo[] = [];
  public status : string = '';

  //weatherForecasts : Object = [];
  errorMessage : string = "";
  public webServiceUrl = "https://localhost:7231/api/WeatherForecast";

  constructor(private requestService : RequestService, private datePipe : DatePipe) { }

  ngOnInit(): void {
    //this.weatherForecasts = [];
  }

  onGetButtonClicked() : void {

    var requestDateTime : Date  = new Date();
    var responseDateTime : Date  = new Date();

    requestDateTime = (new Date);
    console.log("onGetButtonClicked is called at ", this.datePipe.transform( requestDateTime, 'MM/dd/yyyy h:mm:ss'));

    this.sub = this.requestService.requestGet(this.webServiceUrl)
    // resp is type of HttpResponse<IWeatherForecats[]>
    .subscribe({
      next: (resp : HttpResponse<IWeatherForecast[]>)=> {

        responseDateTime = (new Date);
        console.log("response received from service at %s <",  responseDateTime, 'MM/dd/yyyy h:mm:ss');

        // display its headers
        const keys = resp.headers.keys();
        let headers = keys.map((key: any) => `${key} : ${resp.headers.get(key)}`);
        console.log("headers", headers);

        if(resp != null)
        {
          console.log(resp);
          if(resp.body != null)
          {
            let responseBodyLength = resp.body.length;
            let size = this.humanizeData(sizeof(resp.body));

            console.log("response body length",responseBodyLength);
            console.log("response body size in MB", this.humanizeData(sizeof(resp.body)));

            //calculate the time taken in mins
            let timeDifferenceInMiliSeconds = (responseDateTime.getTime() - requestDateTime.getTime()); // milliseconds between now & Christmas
            var diffSeconds = Math.ceil(Math.abs(timeDifferenceInMiliSeconds / 1000)); // minutes
            let timeTaken = diffSeconds;

            //add it to collection
            this.requestInfos.push(new RequestInfo(this.requestId, responseBodyLength, size, timeTaken, JSON.stringify(resp.body)));
            this.requestId++;
            // let body = {...resp.body!};
          }
          else
          {
               //calculate the time taken in mins
            let timeDifferenceInMiliSeconds = (responseDateTime.getTime() - requestDateTime.getTime()); // milliseconds between now & Christmas
            var diffSeconds = Math.ceil(Math.abs(timeDifferenceInMiliSeconds / 1000)); // minutes
            let timeTaken = diffSeconds;
            this.requestInfos.push(new RequestInfo(this.requestId, 0, "NA", timeTaken, "NA"));
            this.requestId++;
            console.log("response body is null")
          }
        }
        else
        {
          console.log("response is null");
        }
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

  humanizeData(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
