import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bike } from '@app/models/bike';
import { User } from '@app/models/user';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  user: any = sessionStorage.getItem('user');

  constructor(private http: HttpClient) { }

  getBikes(user: any) {
    return this.http.get<Bike[]>(apiUrl + '/bikes/getall', this.user);
  }
}
