import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WorkoutsPage} from "../pages/workouts/workouts";
import {AddWorkoutsPage} from "../pages/add-workouts/add-workouts";
import {WorkoutService} from "./services/workout.service";
import {HttpModule} from "@angular/http";
import {WorkoutDetailsPage} from "../pages/workout-details/workout-details";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutsPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutsPage,
    WorkoutDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WorkoutService]
})
export class AppModule {}
