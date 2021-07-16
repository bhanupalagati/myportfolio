import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentComponent } from './deployment.component';
import { CovidCasesComponent } from './covid-cases/covid-cases.component';
import { SharedModule } from '../shared/shared.module';
import { DeploymentRoutingModule } from './deployment-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [DeploymentComponent, CovidCasesComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeploymentRoutingModule,
    NgxChartsModule
  ]
})
export class DeploymentModule { }
