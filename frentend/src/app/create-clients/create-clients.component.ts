import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css']
})
export class CreateClientsComponent {
  constructor(private apiService: ApiService, private router: Router) { };
  clientName : string | undefined;
  status : string | undefined;
  error : string | undefined;
  submitForm() {
    let data = {
      clientName: this.clientName,
      status: this.status
    }
    this.apiService.post<any>('client', data).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/clients']);
      },
      (error: any) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
