import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteremployerComponent } from './registeremployer.component';

describe('RegisteremployerComponent', () => {
  let component: RegisteremployerComponent;
  let fixture: ComponentFixture<RegisteremployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteremployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteremployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
