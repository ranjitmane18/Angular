import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import sizeof from "object-sizeof";

import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { WeatherForecast } from "./weatherforecast";

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};


@Injectable({
 providedIn : 'root'
})

export class RequestService
{
  forecasts! : Observable<HttpResponse<WeatherForecast[]>>;

  constructor(private http: HttpClient) {}

  requestGet(webServiceUrl : string) : Observable<HttpResponse<WeatherForecast[]>> {
    return this.http.get<WeatherForecast[]>(webServiceUrl, {observe : 'response'}).pipe(
      tap(data => {
        console.dir(data);
          console.log('The response received from GET operation. data : ',data);
      })
      );
    }

  requestPost(webServiceUrl : string, weatherForecasts : WeatherForecast[]) : Observable<HttpResponse<WeatherForecast[]>> {
    return this.http.post<WeatherForecast[]>(webServiceUrl, weatherForecasts, {observe : 'response'})
    .pipe(
      tap (data => {
        console.log('The response received from POST operation. data :  %s, size : %s ', data, sizeof(data));
      }),
      catchError(this.handlePostError)
    );
  }

  private handleError(err : HttpErrorResponse) : Observable<WeatherForecast[]>
  {
    let tempObservable = new Observable<WeatherForecast[]>();
    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred : ${err.error.message}`;
    }
    else
    {
      errorMessage = `The server returned error code : ${err.message}`;
    }
    console.error(errorMessage);
    return tempObservable;
  }

  private handlePostError(err : HttpErrorResponse) : Observable<HttpResponse<WeatherForecast[]>>
  {
    let tempObservable = new Observable<HttpResponse<WeatherForecast[]>>();
    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred : ${err.error.message}`;
    }
    else
    {
      errorMessage = `The server returned error code : ${err.message}`;
    }
    console.error(errorMessage);
    return tempObservable;
  }
}


