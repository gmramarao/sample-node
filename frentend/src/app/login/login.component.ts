import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService, private router: Router) { }
  username: string | undefined;
  password: string | undefined;
  error : string | undefined;
  submitForm() {
    // Add your logic here to handle the login form submission
    // For example, you can make an API call to authenticate the user
    console.log('Form submitted!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    let data = {
      email: this.username,
      password: this.password
    }
    this.apiService.post<any>('v1/login', data).subscribe(
      (response: any) => {
        // Handle the response data
        console.log(response);
        localStorage.setItem("token", response);
        localStorage.setItem("email", this.username || "true");
        this.router.navigate(['/projects']);
      },
      (error: any) => {
        console.log(error);
        this.error = error;
        // Handle the error
      }
    );
  }
}
