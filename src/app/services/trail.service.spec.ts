import { TestBed } from '@angular/core/testing';

import { TrailService } from './trail.service';

describe('TrailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrailService = TestBed.get(TrailService);
    expect(service).toBeTruthy();
  });
});
