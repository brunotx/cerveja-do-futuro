import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBeerComponent } from './pages/consumidor/dashboard/create-beer/create-beer.component';
import { DashboardComponent } from './pages/consumidor/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent},
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'dashboard/:id/create', component: CreateBeerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
