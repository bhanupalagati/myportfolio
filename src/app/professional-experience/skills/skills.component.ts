import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  desc = `Having a wide range of skillsets allow me to craft a solution that perfectly suits
  the problem. Different technologies are good at solving different things and we can solve a
  problem in a quick and easy way when we ensemble different technologies rather than solving
  the entire problem in one. Please find the skills in my toolbox below.`
  skills = [
    {skill: 'Machine Learning', color: 'primary'},
    {skill: 'Deep Learning', color: 'primary'},
    {skill: 'Data Visualization', color: 'accent'},
    {skill: 'PowerBI', color: 'accent'},
    {skill: 'Tableau', color: 'accent'},
    {skill: 'Regression', color: 'primary'},
    {skill: 'Classification', color: 'primary'},
    {skill: 'Recommendation Systems', color: 'primary'},
    {skill: 'Clustering', color: 'primary'},
    {skill: 'Artificial Neural Networks', color: 'primary'},
    {skill: 'Convolutional Neural Networks', color: 'primary'},
    {skill: 'Recurrent Neural Networks', color: 'primary'},
    {skill: 'Python', color: 'accent'},
    {skill: 'R', color: 'accent'},
    {skill: 'Keras', color: 'accent'},
    {skill: 'Angular', color: 'primary'},
    {skill: 'JavaScript', color: 'primary'},
    {skill: 'TypeScript', color: 'primary'},
    {skill: 'MongoDB', color: 'accent'},
    {skill: 'MYSQL', color: 'accent'},
    {skill: 'Express(NODE)', color: 'primary'},
    {skill: 'NestJS', color: 'primary'},
    {skill: 'NODEJS', color: 'primary'},
    {skill: 'CSS', color: 'accent'},
    {skill: 'SCSS', color: 'accent'},
    {skill: 'HTML', color: 'accent'},
    {skill: 'Django', color: 'primary'},
    {skill: 'Flask', color: 'primary'},
    {skill: 'Java', color: 'accent'},
    {skill: 'C', color: 'accent'},
    {skill: 'C++', color: 'accent'},
    {skill: 'C#', color: 'accent'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
