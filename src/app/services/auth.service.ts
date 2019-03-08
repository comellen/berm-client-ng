import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const apiUrl = 'http://localhost:3000';

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('sessionToken');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
