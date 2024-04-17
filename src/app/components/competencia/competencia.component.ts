import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Competencia } from '../DtosInterface/competenciaDTO';
import { CompetenciaService } from 'src/app/services/competencia.service';


@Component({
  selector: 'app-competencia',
  template: `
    <button class="plus-button" (click)="redirectToAltaCompetencia()">
      <i class="fas fa-plus"></i> +
    </button>
  `,
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent {
  token:any
  fixture: any;
  competencias: Competencia[] = [];

  constructor(
    private rest:RestService,
    private router: Router,
    private comp:CompetenciaService
  ){}

  ngOnInit(){
    this.token=localStorage.getItem('token')
    this.obtenercompetencias()
    this.obtenerpartido()

  }

  iduser(){
    this.rest.getUser().subscribe((data:any)=>{
      console.log(localStorage.getItem('mail'))
      data.forEach((item: any) => {
        if(localStorage.getItem('mail')==item.mail){
          console.log(item.id)
        }
    });
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

    redirigirAComponente() {
      this.router.navigate(['/alta-competencia']);
    }
    
    obtenercompetencias(){
      this.rest.getComp().subscribe((data: any) => {
        this.competencias=data;
        console.log(this.competencias)
      this.competencias.forEach((item: any) => {
        // console.log(item);
        // console.log(item.usuario.nombre)
        // console.log(item.nombre);
        // console.log(item.usuario.id);
        // console.log(localStorage.getItem('token'))
    });
  }
  )
}

obtenerpartido(){
  this.comp.getPart().subscribe((data:any)=>{
    console.log(data)
    console.log('si')
  })
}



}
