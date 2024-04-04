import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario!: string;
  contrasenia!: string;
  

  constructor(private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.usuario || !this.contrasenia) {
      this.openSnackBar('Por favor, ingresa el usuario y la contraseña.',"");
      return;
    }

    
    if (this.usuario === '123' && this.contrasenia === '123') {
      this.router.navigate(['/competencia']);
    } else {
      this.openSnackBar("usuario o contraseña incorrectos","");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{duration:1500});
  }

  
}
