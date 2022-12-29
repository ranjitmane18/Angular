import { Component } from "@angular/core";

@Component({
    selector: 'create-new-forecast',
    templateUrl:'./create-forecast.component.html'
})
export class CreateForecastComponent {
    isDirty: boolean = false;
}
