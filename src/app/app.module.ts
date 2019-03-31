import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonalPageEditComponent } from './personal-page-edit/personal-page-edit.component';
import { SkillBarsComponent } from './skill-tree-edit/skill-tree-edit.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import {FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';

import { CanvasComponent } from './canvas/canvas.component';
import { ResizableModule } from 'angular-resizable-element';
import { LoginComponent } from './login/login.component';

import { AppRoutes } from './app.routing';
import {Routes, RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    PersonalPageEditComponent,
    SkillBarsComponent,
    ProjectEditComponent,
    ResumeEditComponent,
    NavBarComponent,

    MainPageComponent,
    LoginComponent

  ],

  imports: [BrowserModule, FormsModule,ResizableModule,RouterModule.forRoot(
    AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
