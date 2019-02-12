import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { TrailsComponent } from './trails/trails.component';
import { RidesComponent } from './rides/rides.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { AddTrailComponent } from './add-trail/add-trail.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'trails', component: TrailsComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', component: PageNotFoundComponent },
];

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddRideComponent,
    AddTrailComponent,
    AddBikeComponent
  ]
})
export class AppModule { }
