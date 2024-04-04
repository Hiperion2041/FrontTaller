import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/v1/login';
  

  constructor(private http:HttpClient) {}

  login(username: string, password: string) {
    const credentials = {
      username: username,
      password: password
    };

    
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
