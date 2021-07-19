import { Component, HostListener, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-pokemon-cluster',
  templateUrl: './pokemon-cluster.component.html',
  styleUrls: ['./pokemon-cluster.component.scss']
})
export class PokemonClusterComponent implements OnInit {

  // static descriptions
  descriptions = {
    part1: {
      title: 'The Pokemon Clustering',
      description: `This dataset consists of 1045 pokemon's basic stats like HP, Attack, Defence, Speed, Special Attack, and
      Special Defence. We can use this data to cluster all the pokemon's to see how the pokemon's were spread in the game. On top
      of that we can provide imaginary pokemon data and see to which cluster it lands on. We can apply similar techniques for more
      business oriented problems like customer segmentation.`,
      datasetInfo: 'This dataset is downloaded from Kaggle and provided by Shubham Chambhare.',
      link: 'https://www.kaggle.com/shubhamchambhare/pokemons-and-there-stats'
    },
    part2 : {
      title: 'About the Analysis',
      process: `To begin with, we have 6 basic stats for each pokemon to perform clustering. Although we can get more information
      if we perform clustering on all 6 it will be near to impossible to visualize our findings. So, we have to somehow reduce our
      inputs count. Dropping a property is bad so, we can average the Normal abilities like HP, Attack, Defence, and Speed similarly
      we can do that for special abilities like Special Attack, and Special Defence. Now we have only two properties to perform clustering
      techniques.`,
      Algorithm: `K-Means algorithm best suits this process because we want to create three groups from all pokemon's based on their abilities
      Low Lyers, Average Players, and Pro Players.`,
      link: 'https://github.com/bhanupalagati/MLProjects/blob/main/pokemon_clustering/PokemonClustering.ipynb'
    },
    part3: {
      graphTitle: 'Pokemon Clustering into three groups',
      xaxis: `X Axis shows the Averaged Normal Abilities of a pokemon and Y Axis shows the Averaged Special Abilities of a pokemon.`,
      graph: `The graph is interactive and one can learn more about the pokemon by hovering on a point in the graph.`,
      desc: `Low Lyers are pokemon's with less Normal and Special abilities, Average players are with average skills and the Pro Players
      are extremely powerful pokemon's.`
    },
    part4: {
      title: 'Predict my Hypothetical Pokemon',
      desc: `Please provide us the basic statistics of a pokemon like HP, Attack, Speed, Defence, SP_attack, and SP_defence.
      We will process and let you know in which category your hypothetical pokemon falls in among the three i.e., Weak, Average, and
      pro players. Give it a shot it will be fun.`
    }
  }

  pokemonData;
  maxBorders;
  minBorders;
  responses;
  labels = ['HP', 'Speed', 'Attack', 'Defence', 'SP_Attack', 'SP_Defence'];
  predictionList = ['Weak Player', 'Average player', 'Pro Player'];
  prediction;
  formValid;
  view: any[] = [700, 700];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'SPECIAL ABILITIES';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'NORMAL ABILITIES';
  maxRadius: number = 5;
  minRadius: number = 1;
  yScaleMin: number = 0;
  yScaleMax: number = 150;

  colorScheme = {
    domain: ['#FF0000', '#0000FF', '#00FF00']
  };

  constructor(private urlService: UrlService) { 
  }
  
  ngOnInit(): void {
    this.fetchPokemonData();
    this.fetchBorders();
    this.resizeAction(window.innerWidth);
  }

  resizeAction(width) {
    this.view[0] = width < 500 ? width - 60 : width - 100
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeAction(window.innerWidth);
  }
  
  fetchPokemonData() {
    this.urlService.getPokemonData().subscribe((data: any) => {
      this.formatData(data);
    })
  }

  fetchBorders() {
    this.urlService.getSliderLimits().subscribe((data: any) => {
      this.maxBorders = data.maxDetails;
      this.minBorders = data.minDetails;
      this.responses = [...this.minBorders];
    })
  }

  predictPokemon() {
    const postData = [(this.responses[0] + this.responses[1] + this.responses[2] + this.responses[3]) / 4 , (this.responses[4] + this.responses[5]) / 2]
    this.urlService.predictPokemon({"data": postData}).subscribe((result: number) => {
      this.prediction = this.predictionList[result];
    });
  }

  valueUpdated() {
    this.prediction = undefined;
  }

  formatData(data) {
    data.forEach(element => {
      element.series.forEach(item => {
        item.r = 1;
      });
    });
    this.pokemonData = data;
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
