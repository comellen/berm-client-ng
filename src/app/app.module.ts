import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { TrailsComponent } from './trails/trails.component';
import { RidesComponent } from './rides/rides.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'trails', component: TrailsComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    TrailsComponent,
    RidesComponent,
    HomeComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
