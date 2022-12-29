import { Component, OnInit } from "@angular/core";
import { ForecastService } from "../../common/forecast.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './forecast-details.component.html'
})
export class ForecastDetails implements OnInit {

    forecast : any;

    constructor(private forecastService: ForecastService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
      this.forecast = this.forecastService.getForecast(this.route.snapshot.params['id']);
      console.log("forecast details constructor is called");
    }

}
