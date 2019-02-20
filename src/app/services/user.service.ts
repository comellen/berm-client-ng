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

  login(email: string, password: string) {
    return this.http.post<any>(apiUrl + '/user/login', { email, password })
      .pipe(map(user => {
        if (user && user.sessionToken) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  signup(user: User) {
    return this.http.post(apiUrl + '/user/signup', user);
  }

  update(user: User) {
    return this.http.put(`/user/` + user.id, user);
  }

  logout() {
    sessionStorage.clear();
  }
}
