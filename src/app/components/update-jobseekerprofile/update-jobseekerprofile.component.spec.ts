import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobseekerprofileComponent } from './update-jobseekerprofile.component';

describe('UpdateJobseekerprofileComponent', () => {
  let component: UpdateJobseekerprofileComponent;
  let fixture: ComponentFixture<UpdateJobseekerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobseekerprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateJobseekerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
