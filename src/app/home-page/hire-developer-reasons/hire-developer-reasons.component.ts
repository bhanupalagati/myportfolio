import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-developer-reasons',
  templateUrl: './hire-developer-reasons.component.html',
  styleUrls: ['./hire-developer-reasons.component.scss']
})
export class HireDeveloperReasonsComponent implements OnInit {
  skillsets;
  constructor() { }

  ngOnInit(): void {
    this.skillsets = [
      {
        iconName: 'account_tree',
        headingName: 'Full Stack Developer',
        skills: [
          'Angular',
          'React',
          'NodeJs',
          'JavaScript, HTML, CSS'
        ],
        desc: `As a full stack web developer I have developed and designed several web applications using Angular, React, NodeJs, Flask, NestJs, MongoDB, and SQL.
              This experience allowed me to see the problems in a bigger picture and design solutions that allows horizontal scaling.`
      },
      {
        iconName: 'web',
        headingName: 'MicroFrontends',
        skills: [
          'SingleSPA'
        ],
        desc: `We developed a suite of applications. In order to access the applications users need to visit various URLs. Moreover, all the applications has similar
              header and leftnav. Microfrontends is the best solution in this scenario by this we can make the leftnav and header as standalone apps which can now be
              maintained by one team. This architecture allows us to design a huge application with several standalone teams.`
      },
      {
        iconName: 'donut_small',
        headingName: 'MicroServices',
        skills: [
          'NodeJS',
          'NestJS',
          'Flask'
        ],
        desc: `Developing a single system solution is everyone's favorite. But more often than not we have to design an approach that span across multiple systems.
              Microservice architecture allow developers to clearly separate the duties and deploy updates in a standalone manner. If one of your microservice is down
              only that functionality will not work but the rest of the app functions as usual. We followed this architecture extensively in our previous team.`
      },
      {
        iconName: 'lightbulb',
        headingName: 'Problem Solving and Analytical Skills',
        skills: [
          'Competitive Coding',
          'Hackathons',
          'Data Structures'
        ],
        desc: `I have strong programming and problem solving skills. I was in the top 15% in several LeetCode contests. Developed serval critical solutions in my
              current and previous roles. Graduated with a gold medal among 160 students.`
      },
      {
        iconName: 'horizontal_distribute',
        headingName: 'Distributed Solutions',
        skills: [
          'AKKA.Net',
          'F#',
          'Actor Model'
        ],
        desc: `We can no longer hope that one day our system processing prowess will increase by which one machine can solve all our problems. We must design our systems
              in a way that supports horizontal scaling, partition tolerance, availability, and eventual consistency. Picking the right tool for the right job is very
              important and my experience with different technologies as a master's student allow me to make design decisions that can truly scale.`
      },
      {
        iconName: 'data_object',
        headingName: 'SQL/NoSQL DataBase',
        skills: [
          'MongoDB',
          'MySQL'
        ],
        desc: `One database cannot solve all your problems, in the same project to store the same type of data we need different databases. My experience with SQL, NoSQL, and
              Distributed databases will allow me to design highly scalable yet reliable databases.`
      },
      {
        iconName: 'code',
        headingName: 'Automation and Scripting',
        skills: [
          'Python',
          'JavaScript',
          'Jasmine',
          'Jest',
          'Selenium'
        ],
        desc: `Automating mundane tasks is a very essential skill for a developer. Along with development I worked on unit testing frameworks like Jest and integration testing
              frameworks like puppeteer. As a Developer in research I wrote scripts to process huge volumes of gene data which save years of human time.`
      }
    ]
  }

}
