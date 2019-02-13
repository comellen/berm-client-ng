import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTrailComponent } from '@app/trails/add-trail/add-trail.component';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(AddTrailComponent);
  }
}
