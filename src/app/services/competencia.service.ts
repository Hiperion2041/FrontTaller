import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { competenciaDTO } from '../components/DtosInterface/competenciaDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  constructor(private http:HttpClient) {
   }

   crearComp(compDto: competenciaDTO): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/competencia/save", compDto,{
      headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})});
  }
}
