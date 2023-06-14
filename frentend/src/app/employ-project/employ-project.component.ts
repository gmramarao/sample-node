import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-employ-project',
  templateUrl: './employ-project.component.html',
  styleUrls: ['./employ-project.component.css']
})
export class EmployProjectComponent implements OnInit{
  constructor(private apiService: ApiService){};
  employeesData: any = [];
  clients: any = [];
  projects: any = [];
  selectedClient: string = '';
  selectedProject: string = '';
  filteredData: any = [];
  ngOnInit(): void {
    this.apiService.get<any>('employ-project', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.employeesData = response;
        this.filteredData = response;
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
    this.getProjectData();
    
  }
  applyFilters(filterType: any){
    if(filterType === 'client'){
      this.getProjectData();
    }
    this.filteredData = this.employeesData.filter((item: any) => {
      const clientMatch = this.selectedClient === '' || item.client._id === this.selectedClient;
      const projectMatch = this.selectedProject === '' || item.project._id === this.selectedProject;
      return clientMatch && projectMatch;
    })
  }

  getProjectData(){
    var url = this.selectedClient ? `project?clientId=${this.selectedClient}` : `project`;
    this.apiService.get<any>(url, true).subscribe(
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
}
