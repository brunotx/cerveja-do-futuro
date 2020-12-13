import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBeer2StepComponent } from './pages/consumidor/dashboard/create-beer2-step/create-beer2-step.component';
import { CreateBeerComponent } from './pages/consumidor/dashboard/create-beer/create-beer.component';
import { DashboardComponent } from './pages/consumidor/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CreateBeer3StepComponent } from './pages/consumidor/dashboard/create-beer3-step/create-beer3-step.component';
import { ComunidadeComponent } from './pages/consumidor/comunidade/comunidade.component';
import { AndamentoCriacaoComponent } from './pages/consumidor/dashboard/andamento-criacao/andamento-criacao.component';
import { CompanyListComponent } from './pages/empresa/company-list/company-list.component';
import { CompanyBeerComponent } from './pages/empresa/company-beer/company-beer.component';
import { CompanyBeer2StepComponent } from './pages/empresa/company-beer2-step/company-beer2-step.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'signIn/:id', component: SignInComponent},
  { path: 'comunidade', component: ComunidadeComponent },
  { path: 'company/:id', component: CompanyListComponent },
  { path: 'companyListBeer/:id', component: CompanyBeerComponent },
  { path: 'companyListBeer/:id/create2Step', component: CompanyBeer2StepComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'dashboard/:id/create', component: CreateBeerComponent },
  { path: 'dashboard/:id/create2Step', component: CreateBeer2StepComponent },
  { path: 'dashboard/:id/create3Step', component: CreateBeer3StepComponent },
  { path: 'dashboard/:id/monitoring', component: AndamentoCriacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
