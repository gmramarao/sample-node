import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error occurred
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message
    console.log(error);
    return throwError(error.error);
  }

  get<T>(url: string, email: any = false): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    console.log(email);
    if(email){
      if(url.indexOf("?") != -1){
        url = `${url}&email=${localStorage.getItem('email')}`
      } else {
        url = `${url}?email=${localStorage.getItem('email')}`
      }
    }
    return this.http.get<T>(`${this.apiUrl}/${url}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(url: string, data: any): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    data.email = data.email || localStorage.getItem('email');
    return this.http.post<T>(`${this.apiUrl}/${url}`, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Add more methods for other HTTP methods (e.g., put, delete) as needed
}