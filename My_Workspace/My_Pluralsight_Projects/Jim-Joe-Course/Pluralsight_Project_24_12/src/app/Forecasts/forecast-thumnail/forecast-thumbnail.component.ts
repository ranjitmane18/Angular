import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "forecast-thumbnail",
    templateUrl: "./forecast-thumbnail.component.html",
    styles: [`
        .white-color { color: white; }
        .green { color: green;  background-color: skyblue; }
        .bold { font-weight: bold;  }
        .active { color: orange; }
    `]
})
export class ForecastThumbnailComponent {
    @Input()
    weather:any;

    @Output()
    onViewButtonClickedEvent = new EventEmitter();

    forecastDuration: any = "1 hour";

    handleOnViewButtonClicked() {
        this.onViewButtonClickedEvent.emit(this.weather.air_quality);
    }

    logText(message: any) {
        console.log(`logText is called : ${message}`);
    }

    getTimeOfTheDayClass() {
        if(this.weather && this.weather.time === '8:00 AM')
        {
            return ['green', 'bold'];
        }
        else
        {
            return [];
        }
    }

    getTimeOfTheDayStyle(): any {
        if(this.weather && this.weather.time === '8:00 AM') {
            return {'color': 'magenta', 'font-weight':'bold'}
        }
        else
        {
            return {};
        }
    }
}
