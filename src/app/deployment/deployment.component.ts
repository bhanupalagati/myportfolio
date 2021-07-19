import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.scss']
})
export class DeploymentComponent implements OnInit {
  mobile;
  deployments = [
    {
      name: 'Covid Cases Prediction',
      oneWord: 'Using Stacked LSTM',
      description: `A Stacked LSTM model was build using the covid cases dataset
      available on Kaggle which has data from January 30th 2020 to July 7th 2021.
      Using this data a LSTM model is trained and tested and on top of that predicted
      the behavior of next 30 days. There is clear description in the dedicated project
      page please do checkout.`,
      link: '/deployments/covid-cases'
    },

    {
      name: 'The Pokemon Clustering App',
      oneWord: 'Using K Means Clustering',
      description: `After converting the dataset with 6 basic stats into 2 stats a K-Means
      clustering algorithm is applied and a interface is provided for the user where one can
      configure new stats for a hypothetical pokemon and predict into which cluster the pokemon
      will fall into.`,
      link: '/deployments/pokemon-cluster'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.mobile = window.innerWidth < 500 ? true : false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.innerWidth < 500 ? true : false;
  }
}
