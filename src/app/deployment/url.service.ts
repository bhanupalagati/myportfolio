import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  Base = 'https://ml-rest-api.herokuapp.com/'
  constructor(private http: HttpClient) { }

  getCovidData() {
    return this.http.get(this.Base + `covidcases`);
  }

  getPokemonData(){
    return this.http.get(this.Base + `pokemoncluster/data`);
  }

  getSliderLimits() {
    // HP, Speed, Attack, Defence, SP_attack, SP_defence
    return this.http.get(this.Base + `/pokemoncluster/borders`)
  }

  predictPokemon(params) {
    return this.http.post(this.Base + `/pokemoncluster/predict`, params)
  }

}
