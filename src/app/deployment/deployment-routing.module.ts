import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidCasesComponent } from './covid-cases/covid-cases.component';
import { DeploymentComponent } from './deployment.component';


const routes: Routes = [
  {path: '', component: DeploymentComponent},
  {path: 'covid-cases', component: CovidCasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeploymentRoutingModule { }
