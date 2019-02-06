import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

export interface Size {
  value: string;
  viewValue: string;
}

export interface Suspension {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.scss']
})
export class AddBikeComponent implements OnInit {
  addBikeForm: FormGroup;

  wheelSizes: Size[] = [
    {value: 'none', viewValue: 'None'},
    {value: 'hardtail', viewValue: 'Hardtail'},
    {value: 'full', viewValue: 'Full suspension'}
  ];

  suspensions: Suspension[] = [
    {value: '24', viewValue: '24'},
    {value: '26', viewValue: '26'},
    {value: '27.5', viewValue: '27.5'},
    {value: '29', viewValue: '29'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AddBikeComponent>,
    public dialog: MatDialog
  ) { }

  //TODO: double check server-side model for key strings
  ngOnInit() {
    this.addBikeForm = this.formBuilder.group({
      "brand": new FormControl(),
      "model": new FormControl(),
      "year": new FormControl(),
      "frame": new FormControl(),
      "suspension": new FormControl(),
      "fork": new FormControl(),
      "shock": new FormControl(),
      "wheelSize": new FormControl(),
      "shifters": new FormControl(),
      "derailleur": new FormControl(),
      "cassette": new FormControl(),
      "brakes": new FormControl(),
      "tires": new FormControl(),
      "additionalComponents": new FormControl(),
      "plannedUpgrades": new FormControl()
    });
  }

  onSubmit() {
    console.log(this.addBikeForm.value);
    this.matDialogRef.close();
  }
}
