import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  submitForm() {
    // Add your logic here to submit the form data
    // For example, you can make an API call to register the user
    console.log('Form submitted!');
    console.log(this);
  }

  formValid(): boolean {
    // Add your form validation logic here
    // For example, check if the password and confirm password match
    return this.password === this.confirmPassword;
  }
}
