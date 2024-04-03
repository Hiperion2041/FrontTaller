import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'jdbc:mysql://localhost:3306/dbtaller';
  

  constructor(private http:HttpClient) {}

  login(username: string, password: string) {
    const credentials = {
      username: username,
      password: password
    };

    
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
