import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-reasons-to-hire',
  templateUrl: './seven-reasons-to-hire.component.html',
  styleUrls: ['./seven-reasons-to-hire.component.scss']
})
export class SevenReasonsToHireComponent implements OnInit {
  skillsets;
  constructor() { }

  ngOnInit(): void {
    this.skillsets = [
      {
        iconName: 'insights',
        headingName: 'Exploratory Tools',
        skills: [
          'Tableau',
          'PowerBI',
          'Descriptive and Report Generative Packages'
        ],
        desc: `Visualizing and story telling is a vital and most frequently used skill. I have
        experience with various Exploratory Data Analysis(EDA) tools.`
      },
      {
        iconName: 'code',
        headingName: 'Scripting Tools',
        skills: [
          'Python',
          'R',
          'JavaScript'
        ],
        desc: `Having a strong programming and scripting knowledge will help us to create new state of
        the art algorithms or tweak the existing ones to suit the application best. Moreover, this
        experience helps to create scrapers and automated data collectors.`
      },
      {
        iconName: 'storage',
        headingName: 'Database Connectors',
        skills: [
          'MySQL',
          'MongoDB'
        ],
        desc: `Having a working knowledge on the SQL and NOSQL knowledge is extremely useful. Because
        most of the times we will be getting data from multiple sources. While I was working as a Full Stack
        Web Developer I acquired these skills. This will significantly improve the Data Engineering and
        preprocessing steps`
      },
      {
        iconName: 'functions',
        headingName: 'Math Skills',
        skills: [
          'Linear Algebra',
          'Calculus',
          'Statistics',
          'Probability Theory'
        ],
        desc: `Although we don't need strong mathematical skills for the applied data science. But it's
        a must if we are touching an algorithm to tweak the performance. On top of that it will help us to
        understand various hyper parameters of a model and their impact on the metrics.`
      },
      {
        iconName: 'lightbulb',
        headingName: 'ML Model knowledge',
        skills: [
          'Regression',
          'Classification',
          'Dimensionality Reduction',
          'Clustering',
          'Recommendation Systems',
          'Association Rules'
        ],
        desc: `The field of Machine Learning is huge it has a lot of sub fields. I worked on all the
        above mentioned fields and have a clear intuitive and under the hood understanding about most of the algorithms
        used in those fields. As a result, I have all the tools in my toolbox and I just need to apply appropriately
        for the given problem.`
      },
      {
        iconName: 'psychology',
        headingName: 'DL Model knowledge',
        skills: [
          'Artificial Neural Networks',
          'Convolutional Neural Networks',
          'Recurrent Neural Networks',
          'Various hybrid and ensemble Neural Networks'
        ],
        desc: `Deep Learning is exponentially growing field with promissing results on huge and multi-sourced
        datasets. Having a knowledge on DL models with math background is extremely useful because we can
        increase the accuracy of the ML based models if we play with the parameters perfectly. Moreover,
        we can solve a large set of problems like Computer Vision, Natural Language Processing and various
        others which give little to worst accuracy if we go with other modeling techniques.`
      },
      {
        iconName: 'account_tree',
        headingName: 'Full Stack Skills',
        skills: [
          'Angular',
          'Node',
          'MongoDB',
          'NestJS',
          'React'
        ],
        desc: `Whatever a Data Engineer, Data Analyst, Data Scientist, Machine Learning Engineer do that will not be
        useful to it's fullest unless we have a platform where users can interact and get benefited from what we have created.
        What is better than a website for this cause. With my 26 months experience as a web developer I can also
        involve in integrating the machine learning solution to the web platform. So, I can be that bridge between
        a data scientists team and web development team if it's required.`
      }
    ]
  }

}
