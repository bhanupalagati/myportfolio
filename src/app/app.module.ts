import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SevenReasonsToHireComponent } from './home-page/seven-reasons-to-hire/seven-reasons-to-hire.component';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { SkillsComponent } from './professional-experience/skills/skills.component';
import { ProjectsComponent } from './professional-experience/projects/projects.component';
import { ExperienceComponent } from './professional-experience/experience/experience.component';
import { PapersComponent } from './professional-experience/papers/papers.component';
import { SchoolingComponent } from './schooling/schooling.component';
import {MatChipsModule} from '@angular/material/chips';
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
    SchoolingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
