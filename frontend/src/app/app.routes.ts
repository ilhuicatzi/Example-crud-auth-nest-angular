import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import AboutComponent from './pages/about/about.component';
import NotFoundComponent from './pages/not-found/not-found.component';
import RegisterComponent from './auth/register/register.component';
import LoginComponent from './auth/login/login.component';
import DashboardComponent from './post/dashboard/dashboard.component';
import NewComponent from './post/new/new.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'post/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'post/new',
    component: NewComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
