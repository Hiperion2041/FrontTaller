import { Component } from '@angular/core';
import { CompetenciaService } from 'src/app/services/competencia.service'; 
import { Competencia, Participante, PartidoDto, Partidos } from './partido.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent {
  partido:Partidos[]=[]
  compe:Partidos[]=[]
  participantes: Participante[]=[]
  compeid:string | undefined
  com:Competencia | undefined

  constructor(
    private comp:CompetenciaService,
    private _snackBar:MatSnackBar,
    private router:Router,
    private rest:RestService
  ){
    
  }

  ngOnInit(){
    this.obtenerpartido()
    const competenciaId = localStorage.getItem('competenciaId');
if (competenciaId !== null) {
  this.compeid = competenciaId;
}
console.log(this.compeid)
this.filtrarcompe()
  }

  obtenerpartido() {
    this.comp.getPart().subscribe((data: any) => {
      const filteredPartidos = data.filter((item: any) => {
        return localStorage.getItem('competenciaId') == item.competencia.id.toString();
      });
  
      if (filteredPartidos.length === 0) {
        this.mostrarSnackbar("Esta competencia no tiene partidos asignados")
        // this.partido = data;
      } else {
        this.partido = filteredPartidos;
      }
    });
  }

  borrarcomp() {
    if (this.compeid) {
      this.comp.deletecomp(parseInt(this.compeid)).subscribe(
        () => {
          console.log('Competencia eliminada con éxito');
          this.router.navigate(['/competencia'])
        },
        error => {
          console.error('Error al eliminar la competencia:', error);
          console.log(this.compeid)
        }
      );
    } else {
      console.error('ID de competencia no definido');
    }
  }

  filtrarcompe(){
    this.rest.getComp().subscribe((data: any) => {
    data.forEach((item: any) => {
      if(localStorage.getItem('competenciaId')==item.id){
        this.com=item;
      }
  });
  console.log(this.com)
}
)
}


  generarpartidos() {
    this.comp.getParticipantes().subscribe(
      (data:any) => {
        this.participantes=data;
        if (this.participantes.length < 2) {
          console.error('No hay suficientes participantes para generar partidos');
          return;
        }
  
        // dos al azar
        const indiceParticipante1 = Math.floor(Math.random() * this.participantes.length);
        let indiceParticipante2 = Math.floor(Math.random() * this.participantes.length);
        
        // part distintos
        while (indiceParticipante2 === indiceParticipante1) {
          indiceParticipante2 = Math.floor(Math.random() * this.participantes.length);
        }
  
        const newpartido: PartidoDto = {
          id: 0,
          id_local: this.participantes[indiceParticipante1],
          id_visitante: this.participantes[indiceParticipante2],
          id_competencia: this.com,
          goles_local: Math.floor(Math.random() * 6),
          goles_visitante: Math.floor(Math.random() * 6),
          fecha_realizacion: new Date().toISOString(),
          fecha_baja:null
        };
  
        this.comp.guardarPartido(newpartido).subscribe(response => {
          console.log('Partido creado con exito:', response);
          this.mostrarSnackbar("Partido creado");
          location.reload;
          // Aquí puedes hacer algo después de guardar la competencia, como redirigir a otra página
        },
        error => {
          console.error('Error al guardar el partido:', error);
          console.log(localStorage.getItem('token'))
          // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        })
        console.log('Partido generado:', newpartido);
      },
      error => {
        console.error('Error al obtener participantes:', error);
      }
    );
  }

  mostrarSnackbar(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      duration: 1500
    });
  }
}
