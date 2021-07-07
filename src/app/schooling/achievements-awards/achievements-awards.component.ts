import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-awards',
  templateUrl: './achievements-awards.component.html',
  styleUrls: ['./achievements-awards.component.scss']
})
export class AchievementsAwardsComponent implements OnInit {
  achievements = [
    'Promoted as a Senior Software Engineer in just 14 months.',
    'Topped Computer Science department in bachelors with 9.73 / 10.',
    'Secured 75% tuition fee waiver for the entire UG degree.',
    'Secured $4500 scholarship for masters degree.',
    'Secured a state level rank in talent test.'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
