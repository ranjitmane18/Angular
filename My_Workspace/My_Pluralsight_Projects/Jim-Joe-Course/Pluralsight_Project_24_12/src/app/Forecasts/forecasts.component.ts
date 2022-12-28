import { Component, OnInit } from "@angular/core";
import { ToastService } from "../common/toastr.service";
import { ForecastService } from "./shared/forecast.service";

@Component({
    selector: 'forecasts',
    templateUrl: './forecasts.component.html' 
})
 export class ForecastsComponent implements OnInit {
    forecasts: any;

    constructor(private forecastService: ForecastService, private toastService: ToastService) {
        
    }
    ngOnInit(): void {
        this.forecasts = this.forecastService.getForecasts();
    }

    handleOnViewButtonClickedEvent(data : any) {
        console.log("received", data);
    }

    onForecastThumbnailClicked(message: any): any {
        console.log("on event thumbnail clicked");
        this.toastService.success(message, "success");
    }
 }