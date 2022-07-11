import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployerprofileComponent } from './update-employerprofile.component';

describe('UpdateEmployerprofileComponent', () => {
  let component: UpdateEmployerprofileComponent;
  let fixture: ComponentFixture<UpdateEmployerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployerprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
