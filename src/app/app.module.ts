import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BikesComponent } from './bikes/bikes.component';
import { TrailsComponent } from './trails/trails.component';
import { RidesComponent } from './rides/rides.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BikesComponent,
    TrailsComponent,
    RidesComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
