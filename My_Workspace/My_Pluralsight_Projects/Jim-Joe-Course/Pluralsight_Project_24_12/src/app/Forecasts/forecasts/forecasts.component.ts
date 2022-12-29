import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { ForecastService } from "src/app/common/forecast.service";
import { ToastService } from "src/app/common/toastr.service";

@Component({
    selector: 'forecasts',
    templateUrl: './forecasts.component.html'
})
 export class ForecastsComponent implements OnInit {

    forecasts: any;

    constructor(private forecastService: ForecastService,
                private toastService: ToastService,
                private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        // this.forecastService.getForecasts().subscribe(forecasts => {
        //     this.forecasts = forecasts
        // });
        this.forecasts = this.route.snapshot.data['forecasts'];
    }

    handleOnViewButtonClickedEvent(data : any) {
        console.log("received", data);
    }

    onForecastThumbnailClicked(message: any): any {
        console.log("on event thumbnail clicked");
        this.toastService.success(message, "success");
    }
 }
