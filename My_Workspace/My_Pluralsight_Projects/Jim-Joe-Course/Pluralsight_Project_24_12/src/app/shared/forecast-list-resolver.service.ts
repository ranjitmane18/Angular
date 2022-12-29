import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { ForecastService } from "../common/forecast.service";

@Injectable()
export class ForecastListResolver implements Resolve<any> {

    constructor(private forecastService: ForecastService) {

    }

    //to access the elements in the stream of observables, use map() function
    //as it is a resolver, we need to observable to angular so that angular can
    //watch observable and see if it executes
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.forecastService.getForecasts().pipe(map(forecasts=> forecasts));
    }

}
