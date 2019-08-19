import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Modules
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AboutComponent} from './components/about/about.component';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import {ClientsComponent} from './components/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
