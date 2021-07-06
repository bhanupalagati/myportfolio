import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  introname = "Hello I'm Bhanu Prakash Reddy Palagati";
  introVocation = "Web Designer and Data Scientist";
  summaryPart1 = `Until August 2021 I worked as a full stack web developer at ValueLabs LLP Hyderabad India.
  Since bachelors I am passionate towards Machine Learning and Data Science. In order to get the
  complete skillset I worked as a Web Developer for 2 years where I got knowledge related to databases,
  several frontend, backend technologies.`;
  summaryPart2 = `Currently I am pursuing Masters of Computer Science at University of Florida. I am currently going through
  several complex Machine Learning and Deep Learning related subjects.`;
  constructor() { }

  ngOnInit(): void {

  }

}
