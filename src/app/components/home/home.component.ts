import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreUsuario: string = "Nombre de Usuario"; // Puedes inicializar esto con el nombre de usuario real

  constructor(
    private router: Router
  ) {}

  redirigirATorneo() {
    this.router.navigate(['/competencia']);
  }
  
  redirigirACrear() {
    this.router.navigate(['/alta-competencia']);
  }
  
  ngOnInit(): void {
    
  }

  desloguear(){
    localStorage.removeItem('token');
    localStorage.removeItem('mail')
    console.log("deslogueado")
    console.log(localStorage.getItem('token'))
    this.router.navigate(['/login']);
  }

}
