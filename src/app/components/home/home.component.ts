import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreUsuario: string = "Nombre de Usuario"; // Puedes inicializar esto con el nombre de usuario real

  constructor() { }

  ngOnInit(): void {
  }

}
