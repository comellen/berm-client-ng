import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from '@app/app.component';
import { BikesComponent } from '@app/bikes/bikes.component';
import { TrailsComponent } from '@app/trails/trails.component';
import { RidesComponent } from '@app/rides/rides.component';
import { HomeComponent } from '@app/home/home.component';
import { NavComponent } from '@app/nav/nav.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { AddRideComponent } from '@app/rides/add-ride/add-ride.component';
import { AddTrailComponent } from '@app/trails/add-trail/add-trail.component';
import { AddBikeComponent } from '@app/bikes/add-bike/add-bike.component';
import { LoginComponent } from '@app/auth/login/login.component';

import { AuthService } from './services/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';

import { ROUTES } from '@app/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    TrailsComponent,
    RidesComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent,
    AddRideComponent,
    AddTrailComponent,
    AddBikeComponent,
    LoginComponent,
    SignupComponent,
    SignupSuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddRideComponent,
    AddTrailComponent,
    AddBikeComponent
  ]
})
export class AppModule { }
