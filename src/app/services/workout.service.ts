import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class WorkoutService {
  static get parameters() {
    return [Http];
  }

  constructor(http) {
    this.http = http;
    console.log('Service connected')
  }

}
