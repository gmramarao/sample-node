import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
  constructor(private apiService: ApiService){}
  clientsData : any;
  ngOnInit(): void {
    this.apiService.get<any>('client', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.clientsData = response;
      },
      (error: any) => {
        console.log(error);
        // Handle the error
      }
    );
  }
}
