import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { TemplateFoemComponent } from './template-foem/template-foem.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    PersonalDetailsFormComponent,
    EducationDetailsComponent,
    ExperienceDetailsComponent,
    CertificationsComponent,
    SkillsComponent,
    ProjectsComponent,
    TemplateFoemComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "" , component: AppComponent  },
      { path: "personal-details", component: PersonalDetailsFormComponent },
      { path: "eduation", component: EducationDetailsComponent },
      { path: "experience-details", component: ExperienceDetailsComponent },
      { path: "certificates", component: CertificationsComponent },
      { path: "skills", component: SkillsComponent },
      { path: "projects-details", component: ProjectsComponent },
      { path: "templates", component: TemplateFoemComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
