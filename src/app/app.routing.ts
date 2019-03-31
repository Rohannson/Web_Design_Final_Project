import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PersonalPageEditComponent} from './personal-page-edit/personal-page-edit.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'pp',
    component: PersonalPageEditComponent
  },
  {
    path: 'skilltree',
    component:
  }
];
