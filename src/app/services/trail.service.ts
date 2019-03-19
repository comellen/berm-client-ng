import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trail } from '@app/models/trail';
import { User } from '@app/models/user';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  user: any = sessionStorage.getItem('user');
  
  constructor(private http: HttpClient) { }

  getTrails(user: any) {
    return this.http.get<Trail[]>(apiUrl + '/trails/getall', this.user);
  }
}
