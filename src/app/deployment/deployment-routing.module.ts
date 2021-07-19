import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidCasesComponent } from './covid-cases/covid-cases.component';
import { DeploymentComponent } from './deployment.component';
import { PokemonClusterComponent } from './pokemon-cluster/pokemon-cluster.component';


const routes: Routes = [
  {path: '', component: DeploymentComponent},
  {path: 'covid-cases', component: CovidCasesComponent},
  {path: 'pokemon-cluster', component: PokemonClusterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeploymentRoutingModule { }
