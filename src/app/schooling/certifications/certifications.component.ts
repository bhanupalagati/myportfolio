import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certificates = [
    {
      name: 'IBM Data Science Professional Course',
      doneAt: 'Coursera',
      description: ` This is an amalgamation of nine courses in coursera.
      This is provided by IBM and regarded as one of the best professional
      degree course in coursera. The best part is one has to score more than
      80% in order to get the certificate and that will be challenging.`,
      link: 'https://drive.google.com/file/d/1HZOGZw7dDpFiO7-3b2mu-kLmM0I1aYux/view?usp=sharing'
    },
    {
      name: 'What is Data Science',
      doneAt: 'Coursera',
      description: `A proper and motivating introduction is vital in order to create
      interest in the field of study. This course did an stupendous job in that arena
      by use the 100% real-world examples along with the pros and cons.`,
      link: 'https://drive.google.com/file/d/1czPnyuSGpg2n4POQn9SRRtRKm8tOxlc1/view?usp=sharing'
    },
    {
      name: 'Open Source tools for Data Science',
      doneAt: 'Coursera',
      description: `Anyone can do a job with hard-work. Albeit a person having proper tools
      to accomplish a job can do an astonishing job in a stipulated amount of time. This course
      will empower a data science enthusiast with various online working platforms.`,
      link: 'https://drive.google.com/file/d/171DCfvbEOOi-iK_M98pRBlvgk0Wr4wYh/view?usp=sharing'
    },
    {
      name: 'Data Science Methodology',
      doneAt: 'Coursera',
      description: `One has to question the other in order to make progress in the process of
      creating a Machine Learning model i.e., appropriate for the customer needs. However, a
      lot don't know the order of gathering information. This course wil equip the student
      with the proper model building methodology.`,
      link: 'https://drive.google.com/file/d/1_vabe--iGpm4N-PTSZf9PJhr7VAvLzoD/view?usp=sharing'
    },
    {
      name: 'Python for Data Science and AI',
      doneAt: 'Coursera',
      description: `Albeit Python is a widely used common programming language, it will be
      completely different when one creating a statistical model. This course will show the
      statistical packages and prompt use of those in order to create an efficient yet simple model.`,
      link: 'https://drive.google.com/file/d/13ERpqWv1t5eBrQzF9qyjNSy7j1iqzbdc/view?usp=sharing'
    },
    {
      name: 'Databases and SQL for Data Science',
      doneAt: 'Coursera',
      description: `Data science is not more than understanding and using data.
      Plausibly that data would be in huge amounts, as a result, one needs a
      database management system to properly manage and facilitate data extraction.
      This course provides comprehensive knowledge on SQL and cloud platforms supporting it.`,
      link: 'https://drive.google.com/file/d/1-pOWNoToy9UPM0uHVXgFyNWjwHAPMUqB/view?usp=sharing'
    },
    {
      name: 'Data Analysis with Python',
      doneAt: 'Coursera',
      description: `This is an extension on the course Python for Data Science and AI.
      This goes in-depth with various features of Pandas, Numpy, Scipy, Scikit-learn
      and many more. With this knowledge a model developer can be quick at
      understanding various algorithms moreover he can write one.`,
      link: 'https://drive.google.com/file/d/1aPIlH1055n-vAP0bp0-ZA8tRkPZHjjlw/view?usp=sharing'
    },
    {
      name: 'Data Visualization with Python',
      doneAt: 'Coursera',
      description: `A data scientist can get a lot of insights from numbers.
      But we cannot expect other people to understand the numbers in the same
      way. So, we need another way to tell the story to others and it is nothing
      but Data Visualization. This course equips one with art of telling story using Visualizations.`,
      link: 'https://drive.google.com/file/d/1X5MzhgrgN8Mn-KTtZsyWb02O1eXIbR_S/view?usp=sharing'
    },
    {
      name: 'Machine Learning with Python',
      doneAt: 'Coursera',
      description: `This course has almost covered every conspicuous algorithm with code and usage.
      It starts from basics and covers Regression, Classification, Clustering, Recommendation Systems.
      This course is a project oriented one and includes a project with every algorithm which
      sums up to 20 of them.`,
      link: 'https://drive.google.com/file/d/1zoMqQO79t9a4RSAZa3HdZL-RN0WSCMqB/view?usp=sharing'
    },
    {
      name: 'Applied Data Science Capstone',
      doneAt: 'Coursera',
      description: `This is the capstone project. The main aim of this one is to make the learner to
      complete a real time level project. Moreover, it also talks about various geographical APIs.
      In addition, one has to create a model, presentation and a report in order to complete the course.
      To be honest this is one of the challenging and interesting one.`,
      link: 'https://drive.google.com/file/d/105vzGMGnsE5hiL6YAj1hKAXw3hLHRMn5/view?usp=sharing'
    },
    {
      name: 'Machine Learning with R and Python',
      doneAt: 'Udemy',
      description: `This is a comprehensive course which covers from basics of Machine Learning to
      complex concepts in Deep Learning. This course allows us to learn R in a better way because
      we will code the projects both in Python and R if R has that algorithm.`,
      link: 'https://drive.google.com/file/d/1at-b_nc43F4zIQIWApQu1v5fhn-9hcfC/view?usp=sharing'
    },
    {
      name: 'Tableau V 20',
      doneAt: 'Udemy',
      description: `Tableau is one such tool that all Exploratory Data Analysts should learn.
      Tableau is packed with many features and this course allows us to explore most of the
      important features and thus creating a strong base knowledge.`,
      link: 'https://drive.google.com/file/d/1kLeolOzTu5TMdkzYO4XFpb2zQwcbz-YQ/view?usp=sharing'
    },
    {
      name: 'Angular - Complete Guide',
      doneAt: 'Udemy',
      description: `In the modern web world JavaScript frameworks are playing an important role.
      Angular is occupying a significant part of it. This course allows us to learn Angular in a
      disciplined and organized way rather than learning on demand. Although learning on demand is
      better organized approach would work better for frameworks like Angular because we can achieve
      same result in many ways.`,
      link: 'https://drive.google.com/file/d/1ZS40idfT3wIS2D7IZ_vwc8kWLLz5Q4dp/view?usp=sharing'
    },
    {
      name: 'The Complete JavaScript',
      doneAt: 'Udemy',
      description: `This course provides a clear JavaScript understanding from it's core level.
      This course gives great information related to the JavaScript objects and their properties.
      As a part of course completion we will be creating many projects which adds a great learning
      advantage.`,
      link: 'https://drive.google.com/file/d/1VHFXq5RAUCYbbaZVEJlmdiYKGJqHw1l7/view?usp=sharing'
    },
    {
      name: 'NODE - Complete Guide',
      doneAt: 'Udemy',
      description: `NODE is growing very quick and took a significant stand in server technologies.
      This course provides complete information related to Node to use Node solely for the entire
      web development and using Node only as a Rest API and using Node as a front end in both ways.`,
      link: 'https://drive.google.com/file/d/1Z7aXQ5tXUL6nQ7WYavQOLGCjgSi3HEfP/view?usp=sharing'
    },
    {
      name: 'MongoDB',
      doneAt: 'Udemy',
      description: `MongoDB is a NOSQL database and we can perform many operations on it's document and
      it's very different compared to the relational databases and there are a few operations which are
      costly and some are very quick. This course provides comprehensive information on all mongo methods
      and information about which method to use when.`,
      link: 'https://drive.google.com/file/d/1FwIrFP8kthklUzd11pTcWS0pmhz2FxhN/view?usp=sharing'
    },
    {
      name: 'Python and Django',
      doneAt: 'Udemy',
      description: `Django is a MVC feature rich framework. We can use Django in multiple ways like using
      it as a Full Stack Suite, just as Rest API, and just as Front end. This course elucidates various use
      cases by using multiple projects.`,
      link: 'https://drive.google.com/file/d/1Ac5L83h8E7zOABHN5Dov6ZmKEaNzNIma/view?usp=sharing'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
