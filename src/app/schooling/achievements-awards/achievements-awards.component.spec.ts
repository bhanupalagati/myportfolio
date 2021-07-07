import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsAwardsComponent } from './achievements-awards.component';

describe('AchievementsAwardsComponent', () => {
  let component: AchievementsAwardsComponent;
  let fixture: ComponentFixture<AchievementsAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsAwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
