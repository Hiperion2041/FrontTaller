import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent {
  token:any

  constructor(
    private rest:RestService
  ){}

  ngOnInit(){
    this.token=localStorage.getItem('token')
    this.rest.getComp().subscribe((data: any) => {
      data.forEach((item: any) => {
        console.log(item);
        console.log(item.nombre);
        console.log(item.usuario.nombre);
    });
      
  }
  )
  }
}
