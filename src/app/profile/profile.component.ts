import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = sessionStorage.getItem('user');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    location.reload();
  }
}
