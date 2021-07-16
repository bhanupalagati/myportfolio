import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { SchoolingComponent } from './schooling/schooling.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'experience', component: ProfessionalExperienceComponent},
  {path: 'schooling', component: SchoolingComponent},
  {path: 'deployments',
    loadChildren: () => import('./deployment/deployment.module').then(m => m.DeploymentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
