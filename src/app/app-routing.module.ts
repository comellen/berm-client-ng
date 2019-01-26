import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BikesComponent } from './bikes/bikes.component';
import { RidesComponent } from './rides/rides.component';
import { TrailsComponent } from './trails/trails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'trails', component: TrailsComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
