import { TestBed } from '@angular/core/testing';

import { EmployerprofileService } from './employerprofile.service';

describe('EmployerprofileService', () => {
  let service: EmployerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
