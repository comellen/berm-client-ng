import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrailComponent } from './add-trail.component';

describe('AddTrailComponent', () => {
  let component: AddTrailComponent;
  let fixture: ComponentFixture<AddTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
