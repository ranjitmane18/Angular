import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IWeatherForecast } from "./weatherforecast";


@Injectable({
 providedIn : 'root'
})

export class RequestService
{
  forecasts! : Observable<HttpResponse<IWeatherForecast[]>>;

  constructor(private http: HttpClient) {}

  requestGet(webServiceUrl : string) : Observable<HttpResponse<IWeatherForecast[]>> {
    return this.http.get<any>(webServiceUrl, {observe : 'response'}).pipe(
      tap(data => {
        console.dir(data);
          console.log('The calculated data size : ',data);

      }),
      catchError(this.handleError)
      );
    }

  private handleError(err : HttpErrorResponse) : Observable<HttpResponse<IWeatherForecast[]>>
  {
    let tempObservable = new Observable<HttpResponse<IWeatherForecast[]>>();

    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred : ${err.error.message}`;
    }
    else
    {
      errorMessage = `The server returned error code : ${err.message}`;
      console.error(errorMessage);
    }
    return tempObservable;
  }
}


