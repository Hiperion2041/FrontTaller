import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CompetenciaService } from 'src/app/services/competencia.service';
import { RestService } from 'src/app/services/rest.service';
import { competenciaDTO } from '../../DtosInterface/competenciaDTO';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-competencia',
  templateUrl: './alta-competencia.component.html',
  styleUrls: ['./alta-competencia.component.css']
})
export class AltaCompetenciaComponent {
  nombre: string = "";
  estado: number = 1;
  fechainicio: string = "";
  usId:number=0;


  constructor(
    private comp:CompetenciaService,
    private rest:RestService,
    private _snackBar: MatSnackBar,
    private router:Router
  ){}

  ngOnInit():void{
    this.iduser()
  }

  crearCom() {
    // Crear objeto competenciaDTO con los datos del formulario
    const competencia: competenciaDTO = {
      nombre: this.nombre,
      estado: this.estado,
      fecha_baja: null, // Opcional: puedes manejar la fecha de baja según tus necesidades
      fecha_inicio: this.fechainicio,
      fecha_creacion: new Date().toISOString(), // Puedes obtener la fecha actual aquí
      id: 0, // Puedes manejar el ID según tus necesidades, 0 indica que es un nuevo registro
      usuario: { id: this.usId }
    };

    // Llamar al servicio para guardar la competencia
    this.comp.crearComp(competencia).subscribe(
      response => {
        console.log('Competencia guardada correctamente:', response);
        this.router.navigate(['/home']);
        this.mostrarSnackbar("Competencia Creada Correctamente");
        // Aquí puedes hacer algo después de guardar la competencia, como redirigir a otra página
      },
      error => {
        console.error('Error al guardar la competencia:', error);
        console.log(localStorage.getItem('token'))
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
      }
    );

    // Limpiar los campos del formulario después de enviarlos
    this.nombre = "";
    this.estado = 1;
    this.fechainicio = "";
  }

  iduser(){
    this.rest.getUser().subscribe((data:any)=>{
      console.log(localStorage.getItem('mail'))
      data.forEach((item: any) => {
        if(localStorage.getItem('mail')==item.mail){
          console.log(item.id)
          this.usId=item.id;
        }
    });
    })
  }


  

  formatoFechaISO(fecha: string): string {
    const date = new Date(fecha);
    const isoString = date.toISOString();
    return isoString;
  }


  mostrarSnackbar(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      duration: 1500
    });
  }


}
