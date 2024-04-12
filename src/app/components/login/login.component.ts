import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import * as $ from 'jquery';
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
    newuser:any;
    newpass:any;
    newmail:any;
    newcontrasenia:any;
    apellido:any;
    newpass2:any;

    constructor(
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private router: Router,
        private rest: RestService
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            // username: ['', Validators.required],
            // password: ['', Validators.required]
        });

        this.addFocusClass();
        this.keyUpObserve();
        this.clickLink();
        if(this.rest.isLoggedIn()){
          this.router.navigate(['/competencia'])
        }
    }
    addFocusClass(): void {
        $(".form-control").on("focus", function () {
            $(this).prev().addClass("on-focus");
        }).on("focusout", function () {
            $(".form-label").removeClass("on-focus");
        });
    }

    keyUpObserve(): void {
        $(".form-control").on("keyup", function () {
            // Convertimos el valor a string antes de verificar su longitud
            if (String($(this).val()).length > 0) {
                $(this).prev().addClass("filled");
            } else {
                $(this).prev().removeClass("filled");
            }
        });
    }

    clickLink(): void {
        $(".link").on("click", function () {
            var open = $(this).data("open");
            var close = $(this).data("close");

            $("#" + close).animate({
                'opacity': 0,
                'top': +100
            }, 500 , function () {
                $(this).removeClass("open").addClass("close").removeAttr("style");
                $("#" + open).removeClass("close").addClass("open");
            });
        });
    }

    ingresar() {
        console.log(this.usuario)
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
            this.router.navigate(['/competencia']);
          }, (error : any) => {
            this.mostrarSnackbar('Usuario o contraseña incorrectos');
          });
        }
    
    mostrarSnackbar(mensaje: string) {
        this._snackBar.open(mensaje, '', {
          duration: 1500
        });
      }

      registro() {
        if (this.newpass===this.newpass2) {
          const registrado = {
            nombre: this.newuser,
            apellido: this.apellido,
            contrasenia: this.newpass,
            mail: this.newmail,
          };
          
          // const params2 = new HttpParams()
          //   .set("nombre", registrado.username)
          //   .set("apellido", registrado.apellido)
          //   .set("Contrasenia", registrado.password)
          //   .set("Mail", registrado.mail)

          
          
            this.rest.register(registrado).subscribe(
              (response: any) => {
                console.log('Usuario registrado:', response);
                this.mostrarSnackbar('Usuario registrado correctamente');
                // this.router.navigate(['/login']);
                location.reload();
              },
              error => {
                console.error('Error al registrar usuario:', error);
                this.mostrarSnackbar('Error al registrar usuario');
              }
            );
          } else {
            this.mostrarSnackbar("Las contraseñas no coinciden");
          }
        }

        desloguear(){
          localStorage.removeItem('token');
          console.log("deslogueado")
          console.log(localStorage.getItem('token'))
        }
}