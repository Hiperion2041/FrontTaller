import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

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
  token:any;
  fixture: any;

  constructor(
    private rest:RestService, private router: Router
  ){}

  ngOnInit(){
    this.token=localStorage.getItem('token')
    this.rest.getComp().subscribe((data: any) => {
      data.forEach((item: any) => {
        console.log(item);
        console.log(item.nombre);
        console.log(item.usuario.id);
        console.log(localStorage.getItem('token'))
    });
  }
  )

  this.rest.getPart().subscribe((data:any)=>{
    console.log(data)
  })
  console.log('=================');
  this.iduser()
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

  redirectToAltaCompetencia(): void {
    // Navega a la ruta '/otro-componente' al hacer clic en el botón
    this.router.navigateByUrl('/alta-competencia');
  }

}
