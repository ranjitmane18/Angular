import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class ForecastService {
    getForecasts() {
        let subject = new Subject();
        setTimeout(()=> {
            subject.next(FORECASTS);
            subject.complete();
        }, 10);
        return subject;
    }

    getForecast(id: number) {
        return FORECASTS.find(forecast => forecast.id == id);
    }
}

const FORECASTS = [{
    id: 1,
    air_quality: "Unhealthy",
    date: "25/12/22",
    time : "8:00 AM",
    wind: "N 7 km/h",
    location : {
        city : "Pune",
        pincode : 411028
    }
}, {
    id: 2,
    air_quality: "Healthy",
    date: "26/12/22",
    time : "12:00 PM",
    wind: "N 9 km/h",
    location : {
        city : "Satara",
        pincode : 415506
    }
}, {
    id: 3,
    air_quality: "Slightly unhealthy",
    date: "23/12/22",
    time : "6:00 PM",
    wind: "N 8 km/h"
}
];
