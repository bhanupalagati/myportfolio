import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  cardContents = [
    {
      name: 'PLATFORM ADMIN',
      duration: 'February 2021 - August 2021',
      shortDesc: 'A one stop place for the platform admins to perform CURD and access preference operations.',
      desc: `Having a suite of products to solve various business problems is amazing because you have a perfect
      tool to do a specific task perfectly rather than using a single generic tool to perform all the tasks in a
      mediocre way. But assigning the tool permissions to different people inside the organization is a pain
      and they change constantly based on the various factors that the person involved. In order to solve that
      problem and allow the admin to easily perform bulk or singular operations on users, invite new users for a
      trail, updating the 3rd party tools used, changing data flows, and for various other use cases the suite
      admin can login and perform all those actions in a snap here.`,
      gitLink: '',
      learned: ['Single-SPA', 'Angular', 'NodeJs', 'MongoDB', 'ExpressJS', 'HTML & CSS', 'JEST Unit Testing', 'JEST Integration Testing']
    },
    {
      name: 'ASSET 360',
      duration: 'January 2020 - February 2021',
      shortDesc: 'This is a one stop place for all users where they can see all the applications that they have access for and jump into them directly rather than visiting them individually.',
      desc: `Primarily these suite of applications provide smart solutions for the RealEstate related companies.
      As a company in the RealEstate field one has to find various properties, compare those properties, find what
      price they can pay and how it effect in future, how to acquire, approval process for buying,
      standard maintainance management, selling the property. Each feature afore-mentioned requires a team
      and some people need access to only one application, and some others need access for a lot of them. Based
      on the organization assigned access this application bring all those applications under one roof and render
      them inside the same application rather than navigating user to the specific applications. As a result,
      the user can enjoy hassle free Single Page Application although we are rendering multiple
      completely different websites`,
      gitLink: '',
      learned: ['Single-SPA', 'Angular', 'NodeJs', 'MongoDB', 'ExpressJS', 'HTML & CSS', 'JEST Unit Testing', 'JEST Integration Testing']
    },
    {
      name: 'ACQUIRE',
      duration: 'June 2019 - January 2020',
      shortDesc: 'This application allows users to gather various properties from several sources and they can compare the collected products and allow them to take informed decisions of what they can buy.',
      desc: `This application will be provided to various realestate agents by the company and they will add
      properties to this application with various details then the internal team in the company can perform analysis
      on those properties by doing a mock bidding they can see how that property will perform for that bid. After doing
      this for several properties with several bids internal analysts can finalize the best performing assets and then can
      move file for next steps like approval and buying.`,
      gitLink: '',
      learned: ['Angular', 'NodeJs', 'MongoDB', 'ExpressJS', 'HTML & CSS', 'JEST Unit Testing', 'JEST Integration Testing']
    },
    {
      name: 'IDEAL HOSPITAL LOCATION FINDER',
      duration: 'April 2020 - May 2020',
      shortDesc: 'Considering various parameters related to area and population this application provides a location to inagurate a hospital within 5 mile radius',
      desc: `Starting a hospital in a well chosen location is a win-win situation for the hospital management team and for the public. Since it's in the best location
      more and more people would come to avail their services and patients can also easily reach the hospital because it's nearby.
      This application works by considering location as an input and uses foursquare api to get the
      population, area type, hospitals count, and various other fields related to the location and
      suggests a best place to inagurate a hospital considering all the above factors.`,
      gitLink: '',
      learned: ['Python', 'Clustering', 'Data Visualization', 'FourSquare API']
    },
    {
      name: 'FAKE DATA ANALYSIS USING ENSEMBLED HYBRID ALGORITHM',
      duration: 'January 2019 - April 2019',
      shortDesc: 'To construct and train a strong ensemble algorithm using five simple algorithms and classify the fake new articles using the voting technique.',
      desc: `Fake data detection is the most important problem to be addressed in recent years, there is a lot of research going on in this field.
      Because of its serious impacts on the readers. Researchers, governments, and private agencies are working together to solve the issue.
      This projects uses a hybrid approach for fake data detection using the multinomial voting algorithm. The alogirthm is tested and trained on
      a kaggle dataset and it gave 92% accuracy where individually there accuracy is 82 to 88%.`,
      gitLink: 'https://github.com/bhanupalagati/fake_data_analysis_with_ensembled_hybrid_algorithm',
      learned: ['Naive Bayes', 'Support Vector Machine', 'Random Forest', 'K-Nearest Neighbors', 'Logistic Regression', 'Django', 'SQLite', 'Natural Language Processing']
    },
    {
      name: 'ACCIDENT RESCUE AND IMMEDIATE INTIMATION SYSTEM',
      duration: 'August 2017 - October 2017',
      shortDesc: 'To develop a software that sends alert to hospitals, police, insurance officers, and family members in the event of an accident.',
      desc: `Millions of people are dying on roads just because they are not getting help on time.
      This is totally developed software version of the accident rescue system where user need to
      create an account and provide information related to the family and insurance providers.
      If the accident happens then this application will inform to hospitals, police, insurance officers, and family members.
      As a result, the patient can get help on time. Currently there is no hardware model it's a mocked
      software signal.`,
      gitLink: 'https://github.com/bhanupalagati/Accident_rescue_And_Immediate_intimation_system',
      learned: ['Python', 'TKInter', 'SQLite', 'SMTPLIB', 'Google Automated Mailing Service']
    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(data) {
    this.dialog.open(DialogContentComponent, {
      data
    });
  }

}
