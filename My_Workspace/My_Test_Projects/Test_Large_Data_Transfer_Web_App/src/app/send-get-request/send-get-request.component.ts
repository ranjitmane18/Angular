import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherForecast } from '../common/weatherforecast';
import { RequestService } from '../common/send-request.service';
import { DatePipe, JsonPipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import sizeof from 'object-sizeof';
import { RequestInfo } from '../common/requestInfo';

@Component({
  selector: 'app-send-get-request',
  templateUrl: './send-get-request.component.html',
  styleUrls: ['./send-get-request.component.css']
})


export class SendGetRequestComponent implements OnInit, OnDestroy {

  private sub! : Subscription;
  private requestId : number = 1;

  //public weatherForecasts : WeatherForecast[] = [];
  public requestInfos : RequestInfo[] = [];
  public status : string = '';

  //weatherForecasts : Object = [];
  errorMessage : string = "";
  public webServiceUrl = "https://localhost:5001/api/WeatherForecast/100000";
  //public webServiceUrl = "https://localhost:7231/api/WeatherForecast/GetWeatherForecast";

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
      next: (resp : HttpResponse<WeatherForecast[]>)=> {

        responseDateTime = (new Date);
        console.log("response received from service at %s",  responseDateTime, 'MM/dd/yyyy h:mm:ss');

        // display its headers
        const keys = resp.headers.keys();
        let headers = keys.map((key: any) => `${key} : ${resp.headers.get(key)}`);
        console.log("headers", headers);
        console.log("content-length : ", resp.headers.get('content-length'));

        if(resp != null)
        {
          console.log(resp);
          if(resp.body != null)
          {
            let responseBodyLength = resp.body.length;
            let size = this.humanizeData(sizeof(resp.body));
            let statusCode = resp.status;

            console.log("response body length",responseBodyLength);
            console.log("response body size in MB", size);
            console.log("response status code", statusCode);

            //calculate the time taken in mins
            let timeDifferenceInMiliSeconds = (responseDateTime.getTime() - requestDateTime.getTime()); // milliseconds between now & Christmas
            var diffSeconds = Math.ceil(Math.abs(timeDifferenceInMiliSeconds / 1000)); // minutes
            let timeTaken = diffSeconds;

            //add it to collection
            this.requestInfos.push(new RequestInfo(this.requestId, statusCode, responseBodyLength, size, timeTaken, JSON.stringify(resp.body)));
            this.requestId++;
            // let body = {...resp.body!};
          }
          else
          {
               //calculate the time taken in mins
            let timeDifferenceInMiliSeconds = (responseDateTime.getTime() - requestDateTime.getTime()); // milliseconds between now & Christmas
            var diffSeconds = Math.ceil(Math.abs(timeDifferenceInMiliSeconds / 1000)); // minutes
            let timeTaken = diffSeconds;
            this.requestInfos.push(new RequestInfo(this.requestId, 0, 0, "NA", timeTaken, "NA"));
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
    console.log("Send-Post-Request : ngOnDestroy is called");

    if(this.sub != null)
    {
      this.sub.unsubscribe();
    }
  }

  humanizeData(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    console.log("No of bytes received : ", bytes);
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
