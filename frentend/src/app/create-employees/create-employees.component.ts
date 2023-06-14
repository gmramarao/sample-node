import { Component, HostListener } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent {
  constructor(private apiService: ApiService, private router: Router) { };
  stack: string[] = ['UI Practive', 'MS Practive', 'Java Practive', 'QA Practive'];
  firstName: string | undefined;
  lastName: string | undefined;
  pEmail: string | undefined;
  orgEmail: string | undefined;
  mobile: string | undefined;
  designation: string | undefined;
  stackType: string | undefined;
  isDropdownOpen = false;
  selectedOption: string | undefined;
  empId: string | undefined;
  error: string | undefined;
  submitForm() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      pEmail: this.pEmail,
      orgEmail: this.orgEmail,
      mobile: this.mobile,
      designation: this.designation,
      stackType: this.stackType,
      empId: this.empId
    }
    this.apiService.post<any>('employee', data).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/employees']);
      },
      (error: any) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
