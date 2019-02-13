import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRideComponent } from '@app/rides/add-ride/add-ride.component';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(AddRideComponent);
  }
}
