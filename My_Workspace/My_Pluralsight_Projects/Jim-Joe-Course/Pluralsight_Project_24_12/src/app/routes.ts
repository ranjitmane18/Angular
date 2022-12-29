import { Routes } from "@angular/router";
import { Error404Component } from "./error/404.component";
import { ForecastDetails } from "./forecasts/forecast-details/forecast-details.component";
import { ForecastRouteActivator } from "./shared/forecast-route-activator.service";

import { CreateForecastComponent } from "./shared/create-forecast.component";
import { ForecastListResolver } from "./shared/forecast-list-resolver.service";
import { ForecastsComponent } from "./forecasts/forecasts/forecasts.component";

//resolver: before resolving the route, call the resolver and when the resolver finishes and
//returns the data and this data to route as property named "forecasts",
//so its going to take the forecasts returned by the resolver and put them in property named forecasts
export const appRoutes: Routes = [
    { path: 'forecasts/new', component: CreateForecastComponent , canDeactivate: ['canDeactivateCreateForecast']},
    { path : 'forecasts', component: ForecastsComponent, resolve: {forecasts: ForecastListResolver} },
    { path : 'forecasts/:id', component: ForecastDetails, canActivate: [ForecastRouteActivator]},
    { path: '', redirectTo: '/forecasts', pathMatch: 'full'},
    { path: '404', component: Error404Component}
]
