import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginjobseekerComponent } from './loginjobseeker.component';

describe('LoginjobseekerComponent', () => {
  let component: LoginjobseekerComponent;
  let fixture: ComponentFixture<LoginjobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginjobseekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
