import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { response } from 'express';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  constructor(private apiService: ApiService){}
  projectData: any[] = [];
  selectedClient: string = '';
  clients: any = [];
  orginalData : any = [];
  ngOnInit(): void {
    this.apiService.get<any>('project', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.projectData = response;
        this.orginalData = response;
      },
      (error: any) => {
        console.log(error);
        // Handle the error
      }
    );
    this.apiService.get<any>('client', true).subscribe((response: any ) =>{
      this.clients = response;
    }, (error: any) => { 
      console.log(error);
    }
    )
  }

  applyFilters(){
    this.projectData = this.orginalData.filter((item: any)=>{
      console.log(item);
      console.log(this.selectedClient);
      const match = this.selectedClient === '' || this.selectedClient ===  item.client[0]._id;
      return match;
    })
  }
}
