import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Competencia, competenciaDTO } from '../components/DtosInterface/competenciaDTO';
import { Observable } from 'rxjs';
import { PartidoDto, Partidos } from '../components/fixture/partido.interface';

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

  actComp(competencia: Competencia): Observable<any> {
    return this.http.put("'http://localhost:8080/api/v1/competencia/update/${competencia.id'",competencia,{
      headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})});
  }

  deletecomp(id:number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v1/competencia/${id}`, {
      headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})
    });
}

  getPart(){
    return this.http.get("http://localhost:8080/api/v1/partidos",{
      headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})})
    } 

    getParticipantes(){
      return this.http.get("http://localhost:8080/api/v1/participantes",{
      headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})})
    }

    guardarPartido(partidoDto: PartidoDto): Observable<any> {
      return this.http.post("http://localhost:8080/api/v1/partido/save", partidoDto,{
        headers: new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})})
    }
}
