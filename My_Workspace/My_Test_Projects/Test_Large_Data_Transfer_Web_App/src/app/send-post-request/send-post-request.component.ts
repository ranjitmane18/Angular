import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe, JsonPipe } from '@angular/common';
import { RequestService } from '../common/send-request.service';
import { WeatherForecast } from '../common/weatherforecast';
import sizeof from 'object-sizeof';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { RequestInfo } from '../common/requestInfo';

@Component({
  selector: 'app-send-post-request',
  templateUrl: './send-post-request.component.html',
  styleUrls: ['./send-post-request.component.css']
})
export class SendPostRequestComponent implements OnInit, OnDestroy {

  public requestId: number = 1;


  //public webServiceUrl = `https://localhost:7231/api/WeatherForecast/${this.requestId}`;
  public webServiceUrl = `https://localhost:5001/api/WeatherForecast/${this.requestId}`;
  public weatherForecasts : WeatherForecast[] = [];
  public responseBodyText: string ='';
  public noOfJsonObjects : number = 1000000;

  public sub! : any;
  public requestInfos : RequestInfo[] = [];

  constructor(private requestService : RequestService,private datePipe : DatePipe) { }


  ngOnInit(): void {
    this.BuildSampleData();
  }

  onPostButtonClicked(): void {

    this.BuildSampleData();
    var requestDateTime : Date  = new Date();
    var responseDateTime : Date  = new Date();

    requestDateTime = (new Date);
    console.log("onPostButtonClicked is called at %s on %s", this.datePipe.transform( requestDateTime, 'MM/dd/yyyy h:mm:ss'), this.webServiceUrl);

    this.sub = this.requestService.requestPost(this.webServiceUrl, this.weatherForecasts)
    .subscribe( {
      next : (resp : HttpResponse<WeatherForecast[]>) => {
        responseDateTime = (new Date);
        console.log("response received from service at %s",  responseDateTime, 'MM/dd/yyyy h:mm:ss');

        // display its headers
        const keys = resp.headers.keys();
        let headers = keys.map((key: any) => `${key} : ${resp.headers.get(key)}`);
        console.log("headers", headers);
        console.log("content-length : ", resp.headers.get('content-length'));


        if(resp != null)
        {
          console.log(sizeof(resp));
          if(resp.body != null)
          {
            //count of json objects
            let responseBodyLength = resp.body.length;
            let size = this.humanizeData(sizeof(resp.body));
            let statusCode = resp.status;

            console.log("resp", resp);
            console.log("response body length", responseBodyLength);
            console.log("response body size in bytes", size);
            console.log("response status code", statusCode);

            //calculate the time taken in mins
            let timeDifferenceInMiliSeconds = (responseDateTime.getTime() - requestDateTime.getTime());
            var diffSeconds = Math.ceil(Math.abs(timeDifferenceInMiliSeconds / 1000)); // minutes
            let timeTaken = diffSeconds;

              //add it to collection
              this.requestInfos.push(new RequestInfo(this.requestId, statusCode, responseBodyLength, size, timeTaken, JSON.stringify(resp.body)));
              this.requestId++;
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
      error : err =>  {
        console.log("errro ocurred during getting response", err)}
    });
  }

  private BuildSampleData() : void
  {
    console.log("BuildSampleData is called with no of json objects", this.noOfJsonObjects);
    this.weatherForecasts = [];
    for (let index1=0; index1 < this.noOfJsonObjects ; index1++)
    {
      this.weatherForecasts.push(
        new WeatherForecast((new Date),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        "summary"));
    }


    this.responseBodyText = JSON.stringify(this.weatherForecasts.slice(0,10));
  }

  private getRandomInt(): any
  {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
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


