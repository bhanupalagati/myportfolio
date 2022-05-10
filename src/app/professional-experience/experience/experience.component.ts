import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  employmentHistory = [
    {
      companyName: 'University of Florida',
      location: 'Gainesville, USA',
      duration: 'February 2022 - May 2022',
      position: 'Student Software Developer',
      desc: `Developed interactive web app to publish research result using Angular, Nest, MySQL.
      Implemented automatic gene transcript generation from gene data with parallel processing in python.
      Developed a gene graph annotations package which saved 40 research hours every week and human errors.`
    },
    {
      companyName: 'ValueLabs LLP',
      location: 'Hyderabad, India',
      duration: 'April 2019 - August 2021',
      position: 'Senior Software Developer',
      desc: `I worked as a Full Stack Web Developer for 27 months in ValueLabs LLP. Primarily I worked on
      JavaScript related frameworks like Angular, React, NodeJS, MongoDB, ExpressJS, NestJS. I worked for
      three enterprise level projects during my period at ValueLabs and these projects were related to RealEstate
      management solutions. Moreover, I was involved in some other machine learning related projects in the
      company. As this is my first full time job I have learned a lot related to team playing, time management,
      stress management, communication skills, and other professional skills.`
    },
    {
      companyName: 'Hyoristic Innovations',
      location: 'Chennai, India',
      duration: 'February 2018 - May 2018',
      position: 'Machine Learning Intern',
      desc: `During my time at Hyoristic Innovations I worked on building various classification and regression models
      using many algorithms available under the SciKit Learn library. On top of that, I worked on building a business
      specific personal assistant which will automate the mundane tasks inside that business using Natural Language Processing.
      I have learned a lot related to machine learning and it interested me a lot and pushed me to take various ML related
      courses, projects, and even publications during my bachelors.`
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
