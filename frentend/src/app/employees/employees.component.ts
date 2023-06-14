import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  constructor(private apiService: ApiService){}
  employeesData : any;
  ngOnInit(): void {
    this.apiService.get<any>('employee', true).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        this.employeesData = response;
      },
      (error: any) => {
        console.log(error);
        // Handle the error
      }
    );
  }

}
