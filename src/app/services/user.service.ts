import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '@app/models/user';

const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>(apiUrl + '/user/login', { user: user })
      .pipe(map(user => {
        if (user && user.sessionToken) {
          localStorage.setItem('sessionToken', JSON.stringify(user.sessionToken));
        }
        return user;
      }));
  }

  signup(user: User) {
    console.log(user);
    return this.http.post(apiUrl + '/user/signup', { user: user });
  }

  update(user: User) {
    return this.http.put(`/user/` + user.id, { user: user });
  }

  logout() {
    localStorage.clear();
  }
}
