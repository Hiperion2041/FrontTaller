import { Component } from '@angular/core';
import { CompetenciaService } from 'src/app/services/competencia.service'; 
import { Partidos } from './partido.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent {
  partido:Partidos[]=[]
  compe:Partidos[]=[]

  constructor(
    private comp:CompetenciaService,
    private _snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.obtenerpartido()
  }

  obtenerpartido() {
    this.comp.getPart().subscribe((data: any) => {
      const filteredPartidos = data.filter((item: any) => {
        return localStorage.getItem('competenciaId') == item.competencia.id.toString();
      });
  
      if (filteredPartidos.length === 0) {
        this.mostrarSnackbar("Esta competencia no tiene partidos asignados")
        this.partido = data;
      } else {
        this.partido = filteredPartidos;
      }
    });
  }

  mostrarSnackbar(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      duration: 1500
    });
  }
}
