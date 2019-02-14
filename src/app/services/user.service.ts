import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@app/models/user';

const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(user: User) {
    return this.http.post(apiUrl + '/user/signup', user);
  }

  update(user: User) {
    return this.http.put(`/user/` + user.id, user);
  }
}
