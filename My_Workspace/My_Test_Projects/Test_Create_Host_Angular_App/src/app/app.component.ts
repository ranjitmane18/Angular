import { Component } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  /**
   *
   */
  constructor(public auth: AngularFireAuth) {
  }

  title = 'Test_Create_Host_Angular_App';

  //to open a popup to select google account
  signInClicked(): void {
    this.auth.signInWithPopup((new firebase.auth.GoogleAuthProvider()));
  }

  //signout 
  signOutClicked(): void {
    this.auth.signOut();
  }
}
