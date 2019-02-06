import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})
export class AddRideComponent implements OnInit {
  addRideForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AddRideComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.addRideForm = this.formBuilder.group({
      "trail": new FormControl(),
      "location": new FormControl,
      "bike": new FormControl,
      "time": new FormControl,
      "date": new FormControl,
      "notes": new FormControl
    });
  }

  onSubmit() {
    console.log(this.addRideForm.value);
    this.matDialogRef.close();
  }
}
