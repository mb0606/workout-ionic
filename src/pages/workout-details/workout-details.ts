import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Workout} from "../../classes/Workout.class";
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

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
        {{workout.note}}
        <br><br><br><br>
        <button ion-button large round outline color="danger" (click)="onDelete(workout._id.$oid)">Delete Workout</button>
      </ion-card-content>
    </ion-card>
  </ion-content>
`
})
export class WorkoutDetailsPage implements OnInit {
  workout:Workout;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private woService: WorkoutService) {
              this.workout = this.navParams.get('workout');
  }

  ngOnInit(){

  }
  onDelete(workoutId){
    console.log(workoutId)
    this.woService.deleteWorkout(workoutId).subscribe(
      res => {
        console.log(res);

      },
      err => console.error(err),
      () =>  this.navCtrl.push(WorkoutsPage)
    )
  }

}
