import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/consumidor/dashboard/dashboard.component';
import { CreateBeerComponent } from './pages/consumidor/dashboard/create-beer/create-beer.component';
import { CreateBeer2StepComponent } from './pages/consumidor/dashboard/create-beer2-step/create-beer2-step.component';
import { CreateBeer3StepComponent } from './pages/consumidor/dashboard/create-beer3-step/create-beer3-step.component';
import { ComunidadeComponent } from './pages/consumidor/comunidade/comunidade.component';
import { AndamentoCriacaoComponent } from './pages/consumidor/dashboard/andamento-criacao/andamento-criacao.component';
import { CompanyListComponent } from './pages/empresa/company-list/company-list.component';
import { CompanyBeerComponent } from './pages/empresa/company-beer/company-beer.component';
import { CompanyBeer2StepComponent } from './pages/empresa/company-beer2-step/company-beer2-step.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    CreateBeerComponent,
    CreateBeer2StepComponent,
    CreateBeer3StepComponent,
    ComunidadeComponent,
    AndamentoCriacaoComponent,
    CompanyListComponent,
    CompanyBeerComponent,
    CompanyBeer2StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
