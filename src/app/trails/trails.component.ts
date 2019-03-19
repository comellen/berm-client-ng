import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTrailComponent } from '@app/trails/add-trail/add-trail.component';
import { TrailService } from '@app/services/trail.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit {
  user: any = sessionStorage.getItem('user');
  trails: any = [];

  constructor(
    private dialog: MatDialog,
    private trailService: TrailService,
    ) { }

  ngOnInit() {
    this.getTrails();
  }

  getTrails() {
    this.trails = [];
    this.trailService.getTrails(this.user)
      .subscribe((data: any) => {
        this.trails = data;
      });
  }

  openDialog() {
    this.dialog.open(AddTrailComponent);
  }
}
