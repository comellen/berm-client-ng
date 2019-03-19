import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddBikeComponent } from '@app/bikes/add-bike/add-bike.component';
import { BikeService } from '@app/services/bike.service';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {
  user: any = sessionStorage.getItem('user');
  bikes: any = [];

  constructor(
    private dialog: MatDialog,
    private bikeService: BikeService,
    ) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikes = [];
    this.bikeService.getBikes(this.user)
      .subscribe((data: any) => {
        this.bikes = data;
      });
  }

  openDialog() {
    this.dialog.open(AddBikeComponent);
  }
}
