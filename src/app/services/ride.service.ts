import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ride } from '@app/models/ride';
import { User } from '@app/models/user';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  user: any = sessionStorage.getItem('user');

  constructor(private http: HttpClient) { }

  getRides(user: any) {
    return this.http.get<Ride[]>(apiUrl + '/rides/getall', user);
  }
}
