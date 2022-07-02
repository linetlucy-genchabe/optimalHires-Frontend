import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiresComponent } from './hires.component';

describe('HiresComponent', () => {
  let component: HiresComponent;
  let fixture: ComponentFixture<HiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
