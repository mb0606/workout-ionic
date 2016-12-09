import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { API_KEY } from '../../key.config'



@Injectable()
export class WorkoutService {
  private apiKey:string = API_KEY;
  private workoutsUrl:string = 'https://api.mlab.com/api/1/databases';

  constructor(private http: Http) { }

  getWorkouts() {
    return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
      .map( res => res.json());
  }


}
