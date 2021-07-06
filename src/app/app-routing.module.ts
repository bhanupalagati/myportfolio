import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'experience', component: ProfessionalExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
