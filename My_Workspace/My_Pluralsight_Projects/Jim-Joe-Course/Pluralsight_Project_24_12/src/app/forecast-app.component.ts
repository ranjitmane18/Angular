import { Component } from '@angular/core';

@Component({
    selector: 'forecast-app',
    template: `
    <div class="container">
        <nav class="nav justify-content-around">
            <a class="nav-link" aria-current="page">Today</a>
            <a class="nav-link">Hourly</a>
            <a class="nav-link">Daily</a>
            <a class="nav-link">Monthly</a>
        </nav>
        <forecasts></forecasts>
    </div>
    `
})
export class ForecastAppComponent {
    title = 'Forecast App Component';
}