import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ForecastService } from "../common/forecast.service";

@Injectable()
export class ForecastRouteActivator implements CanActivate {

    constructor(private forecastService: ForecastService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const forecastExists = !!this.forecastService.getForecast(+route.params['id']);

        if(!forecastExists) {
         this.router.navigate(['/404']);
        }
    }
}
