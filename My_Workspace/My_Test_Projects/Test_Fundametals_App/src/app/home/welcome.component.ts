import { Component, OnInit } from "@angular/core";


@Component({
    templateUrl : './welcome.component.html',
    styleUrls : ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

    WelcomeText : string = "This is my first angular application";
    
    ngOnInit() : void {

    }

}