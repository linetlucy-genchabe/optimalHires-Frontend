import { TestBed } from '@angular/core/testing';

import { JobseekerprofileService } from './jobseekerprofile.service';

describe('JobseekerprofileService', () => {
  let service: JobseekerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobseekerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
