import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../components/DtosInterface/usuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  login(params:HttpParams): Observable<any>{
    console.log(params.toString(),"hhh")
    return this.http.post("http://localhost:8080/api/v1/login",params.toString(),{
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    });
  }


  // register(params: HttpParams): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post("http://localhost:8080/api/v1/usuario/save", params, { headers });
  // }
  
  // register(datos: any): Observable<any> {
  //   return this.http.post("http://localhost:8080/api/v1/usuario/save", datos);
  // }

  register(usuarioDTO: UsuarioDTO): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/usuario/save", usuarioDTO);
  }
}
