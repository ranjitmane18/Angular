import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  WelcomeText : string = '';

  constructor() { }

  ngOnInit(): void {
    this.WelcomeText = "Welcome to REST API Tester Application !!!";
  }

}
