import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRideComponent } from '@app/rides/add-ride/add-ride.component';
import { RideService } from '@app/services/ride.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  user: any = sessionStorage.getItem('user');
  rides: any = [];

  constructor(
    private dialog: MatDialog,
    private rideService: RideService,
    ) { }

  ngOnInit() {
    this.getRides();
    console.log(this.rides);
  }

  getRides() {
    this.rides = [];
    this.rideService.getRides(this.user)
      .subscribe((data: any) => {
        this.rides = data;
      });
  }

  openDialog() {
    this.dialog.open(AddRideComponent);
  }
}
