import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SevenReasonsToHireComponent } from './home-page/seven-reasons-to-hire/seven-reasons-to-hire.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { SkillsComponent } from './professional-experience/skills/skills.component';
import { ProjectsComponent } from './professional-experience/projects/projects.component';
import { ExperienceComponent } from './professional-experience/experience/experience.component';
import { PapersComponent } from './professional-experience/papers/papers.component';
import { SchoolingComponent } from './schooling/schooling.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { FormalEducationComponent } from './schooling/formal-education/formal-education.component';
import { CertificationsComponent } from './schooling/certifications/certifications.component';
import { AchievementsAwardsComponent } from './schooling/achievements-awards/achievements-awards.component';
import { HttpClientModule } from '@angular/common/http';
import { DeploymentModule } from './deployment/deployment.module';
import { SharedModule } from './shared/shared.module';
import { HireDeveloperReasonsComponent } from './home-page/hire-developer-reasons/hire-developer-reasons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavMenuComponent,
    SevenReasonsToHireComponent,
    FooterComponent,
    ProfessionalExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    PapersComponent,
    SchoolingComponent,
    DialogComponent,
    DialogContentComponent,
    FormalEducationComponent,
    CertificationsComponent,
    AchievementsAwardsComponent,
    HireDeveloperReasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DeploymentModule,
    SharedModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
