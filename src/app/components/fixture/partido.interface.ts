export class Partido {
    id:number | undefined;
    id_local:number | undefined;
    id_visitante:number | undefined;
    id_competencia:number | undefined;
    goles_local:number | undefined;
    goles_visitante:number | undefined;
    fecha_realizacion:Date | undefined;
    competencia:Competencia[] | undefined;
    participante:Participante[] | undefined;
    
    constructor() {}
  }1

export interface Partidos{
    id:number;
    local:Participante;
    visitante:Participante;
    id_competencia:number;
    goles_local:number;
    goles_visitante:number;
    fecha_realizacion:Date;
    competencia:Competencia;
    participante:Participante;

}

export interface Participante{
    id:number;
    nombre:string;
    colores:string;
    trofeos:string;

}

export interface Competencia {
    nombre: string;
    id:number;
    estado:number;
    fecha_baja:null | undefined;
fecha_inicio:string;
fecha_creacion: string;
  }