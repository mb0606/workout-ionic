import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Workout} from "../../classes/Workout.class";
import {WorkoutService} from "../../app/services/workout.service";


@Component({
  selector: 'page-add-workouts',
  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>Add Workout</ion-title>
    </ion-navbar>
  </ion-header>
  
  <ion-content padding>
    <h2>Add Workout</h2>
    <form (ngSubmit)="onSubmit(f.value); f.reset()" #f="ngForm">
      <ion-list>
      
        <ion-item>
          <ion-label >Title</ion-label>
          <ion-input [(ngModel)]="title" name="title" ></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label >Note</ion-label>
          <ion-textarea [(ngModel)]="note" name="note" ></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label fixed>Type</ion-label>
          <ion-select [(ngModel)]="type" name="type">
            <ion-option value="Jogging">Jogging</ion-option>
            <ion-option value="Boxing">Boxing</ion-option>
            <ion-option value="Elliptical">Elliptical</ion-option>
            <ion-option value="Free Weights">Jogging</ion-option>
            <ion-option value="Aerobics">Aerobics</ion-option>
          </ion-select>
       </ion-item>
       
       <ion-item>
          <button ion-button round outline type="submit">Add Workout</button>
       </ion-item>
       
      </ion-list>
    </form>

  </ion-content>

`
})
export class AddWorkoutsPage {
  title: string;
  note: string;
  type: string;

  constructor(public navCtrl: NavController,
              private woService:WorkoutService) {
  }

  onSubmit(workout: Workout){
    console.log(workout)

  }

}
