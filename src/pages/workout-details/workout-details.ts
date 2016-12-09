import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Workout} from "../../classes/Workout.class";

@Component({
  selector: 'page-workout-details',
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Workouts Details</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <ion-card padding>
      <ion-card-header><strong>{{workout.title}}</strong></ion-card-header>
      <ion-card-content> 
        <p><strong>Type: </strong>{{workout.type}}</p>
        <hr>
        {{workout.notes}}
        <button ion-button round outline>Delete Workout</button>
      </ion-card-content>
    </ion-card>
  </ion-content>
`
})
export class WorkoutDetailsPage implements OnInit {
  workout:Workout;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
              this.workout = this.navParams.get('workout');
  }

  ngOnInit(){

  }

}
