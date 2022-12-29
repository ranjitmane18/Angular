import { Component, OnInit } from "@angular/core";
import { ToastService } from "../common/toastr.service";
import { ForecastService } from "../common/forecast.service";
import { ActivatedRoute } from "@angular/router";

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
