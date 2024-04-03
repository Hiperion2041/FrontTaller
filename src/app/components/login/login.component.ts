import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';
import { HttpParams } from '@angular/common/http';
import { data } from 'jquery';
import { RestService } from 'src/app/services/rest.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    loading = false;
    reset: any;
    usuario: any;
    contrasenia: any;

    constructor(
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private router: Router,
        private _login: LoginService,
        private rest: RestService
    ) {}

    ngOnInit(): void {
        // this.form = this.formBuilder.group({
        //     usuario: ['', Validators.required],
        //     contrasenia: ['', Validators.required]
        // });

        this.addFocusClass();
        this.keyUpObserve();
        this.clickLink();
    }
    addFocusClass() {
        throw new Error('Method not implemented.');
    }
    keyUpObserve() {
        throw new Error('Method not implemented.');
    }
    clickLink() {
        throw new Error('Method not implemented.');
    }

    ingresar() {
        const user ={
            username: this.usuario,
            password: this.contrasenia
        };

        // if (user.username === '123' && user.password === '123') {
        //     // Si el usuario y la contraseña son '123', redirige a otra página
        //     this.router.navigate(['otra-pagina']);
        //     return; // Detiene la ejecución de la función aquí
        //   } else {
        //     this.mostrarSnackbar("usuario mal")
        //   }


        const params = new HttpParams()
        .set('username',user.username)
        .set('password', user.password);

        console.log(params)

        this.rest.login(params).subscribe((data: any) => {
            console.log(data)
                localStorage.setItem('token', data.access_token);
            console.log('Ingreso correcto');
            this.router.navigate(['competencia']);
          }, (error : any) => {
            this.mostrarSnackbar('Usuario o contraseña incorrectos');
          });
        }
    
    mostrarSnackbar(mensaje: string) {
        this._snackBar.open(mensaje, '', {
          duration: 1500
        });
      }

    
}