import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { API_KEY } from '../../key.config'
import {Workout} from "../../classes/Workout.class";



@Injectable()
export class WorkoutService {
  private apiKey:string = API_KEY;
  private workoutsUrl = 'https://api.mlab.com/api/1/databases/my-workouts-dev/collections/workouts';

  constructor(private http: Http) { }

  getWorkouts() {
    return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
      .map( res => res.json());
  }

  addWorkout(workout:Workout){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post(this.workoutsUrl + '?apiKey=' + this.apiKey,
                      JSON.stringify(workout),
                      {headers: headers})
              .map( res => res.json());
  }

  deleteWorkout(id: string){
    return this.http.delete(this.workoutsUrl + '/'+ id +'?apiKey=' + this.apiKey, )
  }


}
