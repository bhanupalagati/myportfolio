import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenReasonsToHireComponent } from './seven-reasons-to-hire.component';

describe('SevenReasonsToHireComponent', () => {
  let component: SevenReasonsToHireComponent;
  let fixture: ComponentFixture<SevenReasonsToHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenReasonsToHireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenReasonsToHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
