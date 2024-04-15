import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../components/DtosInterface/usuarioDTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  login(params:HttpParams): Observable<any>{
    console.log(params.toString(),"hhh")
    return this.http.post("http://localhost:8080/api/v1/login",params.toString(),{
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
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




  // para usar get 
  // return this.http.post("http://localhost:8080/api/v1/usuario", usuarioDTO);
  // headers:{'Content-Type':'application/x-www-form-urlencoded',"Authorization":"Bearer" + localStorage.getItem.(token)}
  getComp(){
    return this.http.get("http://localhost:8080/api/v1/competencias",{
      headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})})
    }
    
    getPart(){
      return this.http.get("http://localhost:8080/api/v1/partidos",{
        headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})})
      } 

      getFixture(): Observable<any> {
        return this.http.get<any>('http://localhost:8080/api/v1/fixture', {
          headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
        });
      }

      getUser(){
        return this.http.get("http://localhost:8080/api/v1/usuarios",{
        headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})})
      }

  }
