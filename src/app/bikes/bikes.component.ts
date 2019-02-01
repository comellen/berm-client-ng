import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddBikeComponent } from '@app/add-bike/add-bike.component';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(AddBikeComponent);
  }
}
