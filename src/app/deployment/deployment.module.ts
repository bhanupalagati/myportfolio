import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentComponent } from './deployment.component';
import { CovidCasesComponent } from './covid-cases/covid-cases.component';
import { SharedModule } from '../shared/shared.module';
import { DeploymentRoutingModule } from './deployment-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PokemonClusterComponent } from './pokemon-cluster/pokemon-cluster.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DeploymentComponent, CovidCasesComponent, PokemonClusterComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeploymentRoutingModule,
    NgxChartsModule,
    FormsModule
  ]
})
export class DeploymentModule { }
