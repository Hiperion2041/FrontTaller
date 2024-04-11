import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: RestService, private router: Router, private snackbar: MatSnackBar) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      this.versnackbar("Necesitas estar logueado para acceder")
      return false;
    }
  }

  versnackbar(mensaje:string){
    this.snackbar.open(mensaje,"",{
        duration:3000
    });
  }
}
