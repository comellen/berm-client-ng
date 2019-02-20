import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, CanActivate } from '@angular/router';

import { LoginComponent } from '@app/auth/login/login.component';
import { SignupComponent } from '@app/auth/signup/signup.component';
import { HomeComponent } from '@app/home/home.component';
import { BikesComponent } from '@app/bikes/bikes.component';
import { RidesComponent } from '@app/rides/rides.component';
import { TrailsComponent } from '@app/trails/trails.component';

import { 
  AuthGuardService as AuthGuard 
} from '@app/services/auth-guard.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { title: 'Home' }
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { title: 'Home' }
  },
  { 
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard],
    data: { title: 'Sign Up' }
  },
  { 
    path: 'bikes',
    component: BikesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Bikes' }
  },
  { 
    path: 'Rides',
    component: RidesComponent,
    canActivate: [AuthGuard],
    data: { title: 'Rides' }
  },
  { 
    path: 'Trails',
    component: TrailsComponent,
    canActivate: [AuthGuard],
    data: { title: 'Trails' }
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
