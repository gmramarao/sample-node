import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { CreateProjectsComponent } from './create-projects/create-projects.component';
import { EmployProjectComponent } from './employ-project/employ-project.component';
import { CreateEmployeProjectComponent } from './create-employe-project/create-employe-project.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LeftNavComponent,
    ProjectsComponent,
    HeaderComponent,
    EmployeesComponent,
    ClientsComponent,
    CreateEmployeesComponent,
    CreateClientsComponent,
    CreateProjectsComponent,
    EmployProjectComponent,
    CreateEmployeProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
