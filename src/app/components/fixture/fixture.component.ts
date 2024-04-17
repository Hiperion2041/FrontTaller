import { Component } from '@angular/core';
import { CompetenciaService } from 'src/app/services/competencia.service'; 
import { Partidos } from './partido.interface';
@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent {
  partido:Partidos[]=[]
  compe:Partidos[]=[]

  constructor(
    private comp:CompetenciaService
  ){}

  ngOnInit(){
    this.obtenerpartido()
  }

  obtenerpartido(){
    this.comp.getPart().subscribe((data:any)=>{
      this.partido=data;
      console.log(this.partido);
      // this.partido.forEach((item: any) => {
      //   // console.log(item.competencia)
      //   this.compe.push(item.competencia)
      // });
    });
    // console.log(this.compe)
  }
}
