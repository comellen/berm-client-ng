import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

export interface Difficulty {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-trail',
  templateUrl: './add-trail.component.html',
  styleUrls: ['./add-trail.component.scss']
})
export class AddTrailComponent implements OnInit {
  addTrailForm: FormGroup;

  //TODO: double check server-side model for key strings
  difficulties: Difficulty[] = [
    {value: 'easy', viewValue: 'Easy'},
    {value: 'intermediate', viewValue: 'Intermediate'},
    {value: 'advanced', viewValue: 'Advanced'},
    {value: 'mostAdvanced', viewValue: 'Most advanced'},
  ]



  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AddTrailComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.addTrailForm = this.formBuilder.group({
      "trailName": new FormControl(),
      "location": new FormControl(),
      "distance": new FormControl(),
      "difficulty": new FormControl(),
      "completed": new FormControl(),
      "date": new FormControl(),
      "notes": new FormControl()
    });
  }

  onSubmit() {
    console.log(this.addTrailForm.value);
    this.matDialogRef.close();
  }
}
