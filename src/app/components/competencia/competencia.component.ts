import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent {
  token:any;
  fixture: any;

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
        console.log(item.fixture)
    });
  }
  )

  this.rest.getPart().subscribe((data:any)=>{
    console.log(data)
  })
  }

  desloguear(){
    this.rest.logout();
    console.log("deslogueado");
  }

  fixturee(){
    this.rest.getPart().subscribe((data:any)=>{
      console.log(data)
    })
    }

}
