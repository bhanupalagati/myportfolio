import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDeveloperReasonsComponent } from './hire-developer-reasons.component';

describe('HireDeveloperReasonsComponent', () => {
  let component: HireDeveloperReasonsComponent;
  let fixture: ComponentFixture<HireDeveloperReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDeveloperReasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireDeveloperReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
