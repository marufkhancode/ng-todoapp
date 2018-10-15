import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list-app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDYV1m2Zjac0_phWLV68VSMqf2ZUuPf8ik",
      authDomain: "ng-todolistapp.firebaseapp.com",
    });
  }
}
