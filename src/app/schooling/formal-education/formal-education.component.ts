import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formal-education',
  templateUrl: './formal-education.component.html',
  styleUrls: ['./formal-education.component.scss']
})
export class FormalEducationComponent implements OnInit {

  colleges = [
    {
      name: 'University of Florida',
      place: 'Gainesville, Florida, USA.',
      durations: 'August 2021 - Present',
      course: 'Masters of Computer Science',
      Description: `Currently I am doing my first semester at UFL and enrolled in interesting subjects like Analysis of Algorithms,
      Mathematics for Intelligent Systems, and Distributed Operating Systems. In the coming semester I enrolled in ML with Genomics,
      Neural Networks, and Software Engineering. Along with the learning experience UFL is allowing me to explore my interests in
      various extra-curricular activities. GO GATORS!!!!!!!!!!!!`,
      marks: 'Will be updated',
    },
    {
      name: 'Hindustan Institute of Technology and Science',
      place: 'Chennai, TamilNadu, India.',
      durations: 'July 2015 - April 2019',
      course: 'Bachelors of Computer Science',
      Description: `I graduated with a gold medal in the field of computer science and topped
      the department with 9.73 C.G.P.A among 180 students. I was involved in several clubs and
      projects during my study and wrote multiple research papers.`,
      marks: 'C.G.P.A 9.73 / 10',
    },
    {
      name: 'Sri Gayatri Jr College',
      place: 'Nellore, A.P, India',
      durations: 'June 2013 - May 2015',
      course: 'Maths, Physics, Chemistry(M.P.C)',
      Description: `During this period I worked on several mathematical concepts and this is the
      time when I developed passion towards Computers and Math.`,
      marks: 'MARKS 945 / 1000',
    },
    {
      name: 'Sri Vidya Vikas School',
      place: 'Nellore, A.P, India',
      durations: 'June 2008 - April 2013',
      course: 'High School',
      Description: 'I was involved in several science fares and talent test. I got a state level rank in a talent test.',
      marks: 'C.G.P.A 9.2 / 10',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
