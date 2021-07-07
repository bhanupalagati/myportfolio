import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  publications = [
    {
      title: 'Fake Data Analysis and Detection Using Ensembled Hybrid Algorithm',
      desc: `This research paper is about the use of combining multiple machine
      learning algorithms and creating a voting algorithm, and comparing various
      features of this algorithm to the other algorithms. This algorithm is applied
      on classifying Fake Data and the results has shown an increase of 10% accuracy
      and it has given better performance in all metrics like Precision, Recall, and
      F1 scores.`,
      publishedIn: 'Published in IEEE digital library.',
      presentedAt: 'Presented at Surya Engineering college, Vaniyambadi, Tamil Nadu, India.',
      accessLink: 'https://ieeexplore.ieee.org/document/8819741'
    },
    {
      title: 'Machine learning based Descriptive Statistical Analysis on Google Play Store Mobile Applications',
      desc: `Google play store is inundated with a lot of applications and it is constantly expanding everyday.
      A sophisticated analysis on the holistic play store will enhance the developer and user understanding of
      the app dynamics. This paper elucidates all such factors.`,
      publishedIn: 'Published in IEEE digital library.',
      presentedAt: 'Presented Online',
      accessLink: 'https://ieeexplore.ieee.org/document/9183271'
    },
    {
      title: 'Finite Automata for Fake Profile Identification in Online Social Networks',
      desc: `In the contemporary days social security is an important factor and this
      paper cites a new finite automata approach to identify fake profiles in social
      media sites like Facebook.`,
      publishedIn: 'Published in IEEE digital library.',
      presentedAt: 'Presented at Madurai, Tamil Nadu, India.',
      accessLink: 'https://ieeexplore.ieee.org/document/9121086'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
