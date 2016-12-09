import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-workouts',
  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>Home</ion-title>
    </ion-navbar>
  </ion-header>
  
  <ion-content padding>
    <h2>Welcome to WorkoutLog!!</h2>
    <p>
      WE will get you fit !
    </p>
    <p>
      Take a look at the <code>src/pages/</code> directory to add or change tabs,
      update any existing page or create new pages.
    </p>
  </ion-content>

`
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController) {

  }

}
