import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { CreateProjectsComponent } from './create-projects/create-projects.component';
import { authGuard } from './auth.guard';
import { EmployProjectComponent } from './employ-project/employ-project.component';
import { CreateEmployeProjectComponent } from './create-employe-project/create-employe-project.component';
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'let-nav', component: LeftNavComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [authGuard]},
  { path: 'employees', component: EmployeesComponent, canActivate: [authGuard]},
  { path: 'clients', component: ClientsComponent, canActivate: [authGuard] },
  { path: 'create-employees', component: CreateEmployeesComponent, canActivate: [authGuard] },
  { path: 'create-projects', component: CreateProjectsComponent, canActivate: [authGuard] },
  { path: 'create-clients', component: CreateClientsComponent, canActivate: [authGuard] },
  { path: 'employ-project', component: EmployProjectComponent, canActivate: [authGuard] },
  { path: 'create-employ-project', component: CreateEmployeProjectComponent, canActivate: [authGuard] },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
