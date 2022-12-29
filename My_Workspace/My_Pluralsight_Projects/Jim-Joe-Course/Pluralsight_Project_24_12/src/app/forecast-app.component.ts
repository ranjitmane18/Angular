import { Component } from '@angular/core';

@Component({
    selector: 'forecast-app',
    templateUrl: "./forecast-app.component.html",
    styles: [`
    li > a.active { color: orange; }
    `]
})
export class ForecastAppComponent {
    title = 'Forecast App Component';
}
