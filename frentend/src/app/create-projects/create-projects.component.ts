import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css']
})
export class CreateProjectsComponent implements OnInit{
  constructor(private apiService: ApiService, private router: Router) { };
  projectName : string | undefined;
  client : string | undefined;
  status : string | undefined;
  clients : any = [];
  error: any | undefined;
  ngOnInit(): void {
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
  }
  submitForm(){
    let data = {
      projectName: this.projectName,
      status: this.status,
      clientId : this.client
    }
    this.apiService.post<any>('project', data).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/projects']);
      },
      (error: any) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}

