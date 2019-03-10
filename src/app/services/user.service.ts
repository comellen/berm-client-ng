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
      .pipe(map(data => {
        if (data && data.sessionToken) {
          sessionStorage.setItem('sessionToken', JSON.stringify(data.sessionToken));
        }
        return data;
      }));
  }

  signup(user: User) {
    return this.http.post<any>(apiUrl + '/user/signup', { user: user })
      .pipe(map(data => {
      if (data && data.sessionToken) {
        console.log(data);
        sessionStorage.setItem('sessionToken', JSON.stringify(data.sessionToken));
      }
      return data;
    }));
}


// TODO: FIXME: Add update user function to server.
  // update(user: User) {
  //   return this.http.put(`/user/` + user.id, { user: user });
  // }

}
