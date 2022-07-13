import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobseekersComponent } from './view-jobseekers.component';

describe('ViewJobseekersComponent', () => {
  let component: ViewJobseekersComponent;
  let fixture: ComponentFixture<ViewJobseekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobseekersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobseekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
