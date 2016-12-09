import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {WorkoutService} from "../../app/services/workout.service";
import {Workout} from "../../classes/Workout.class";
import {WorkoutDetailsPage} from "../workout-details/workout-details";

@Component({
  selector: 'page-workouts',
  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>Workouts</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <h2>Workouts</h2>
    <ion-list>
      <ion-item *ngFor="let workout of workouts" (click)="workoutSelected($event, workout)">
      {{workout.title}}      
      </ion-item>
    </ion-list>
  </ion-content>

`
})
export class WorkoutsPage implements OnInit{
  workouts: Workout[]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private woService: WorkoutService) {
  }
  ngOnInit(){
    this.woService.getWorkouts().subscribe(
      workouts => {
        this.workouts = workouts;
      }
    )
  }

  workoutSelected(event, workout){
    console.log(workout)
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }


}
