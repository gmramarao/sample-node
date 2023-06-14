import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-create-employe-project',
  templateUrl: './create-employe-project.component.html',
  styleUrls: ['./create-employe-project.component.css']
})
export class CreateEmployeProjectComponent implements OnInit{
  constructor(private apiService: ApiService, private router: Router){}
  
  empId : string | undefined;
  employes : any = [];
  clientId: string | undefined;
  clients: any = [];
  projectId: string | undefined;
  projects: any = [];
  status: string | undefined;
  error: any | undefined;
  ngOnInit(): void {
    this.apiService.get<any>('employee', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.employes = response;
      },
      (error: any) => {
        console.log(error);
        // Handle the error
      }
    );
    this.apiService.get<any>('client', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.clients = response;
      },
      (error: any) => {
        console.log(error);
        // Handle the error
      }
    );
    this.apiService.get<any>('project', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.projects = response;
      },
      (error: any) => {
        console.log(error);
        // Handle the error
      }
    );
  }
  submitForm(){
    let data = {
      empId: this.empId,
      clientId: this.clientId,
      projectId: this.projectId,
      status: this.status
    }
    this.apiService.post<any>('employ-project', data).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/employ-project']);
      },
      (error: any) => {
        console.log(error);
        this.error = error;
      }
    );
  }

  getProjects(){
    this.projectId = '';
    this.apiService.get<any>(`project?clientId=${this.clientId}`, true).subscribe(
      (response: any) => {
        console.log(response);
        this.projects = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
}


