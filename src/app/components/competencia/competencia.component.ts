import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent {
  token:any;
  fixture: any;

  constructor(
    private rest:RestService,
    private router: Router
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

    redirigirAComponente() {
      this.router.navigate(['/alta-competencia']);
    }
    

}
