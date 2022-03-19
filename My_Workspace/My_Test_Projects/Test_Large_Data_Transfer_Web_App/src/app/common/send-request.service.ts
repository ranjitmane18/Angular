import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IWeatherForecast } from "./weatherforecast";


@Injectable({
 providedIn : 'root'
})

export class RequestService
{
  private webServiceUrl = "https://localhost:7231/api/WeatherForecast";
  constructor(private http: HttpClient) {

  }

  requestGet() : Observable<IWeatherForecast[]> {
    return this.http.get<IWeatherForecast[]>(this.webServiceUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  private handleError(err : HttpErrorResponse) : Observable<IWeatherForecast[]>
  {
    let tempObservable = new Observable<IWeatherForecast[]>();

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
