import { competenciaDTO } from "../DtosInterface/competenciaDTO";
import { Usuario } from "../DtosInterface/usuarioDTO";

export class PartidoDto {
    id_competencia:Competencia | undefined;
    fecha_baja:null | undefined;
    fecha_realizacion:string="";
    goles_local:number | undefined;
    goles_visitante:number | undefined;
    id:number | undefined;
    id_local:Participante | undefined;
    id_visitante:Participante | undefined;
    
    constructor() {}
  }

export interface Partidos{
    id:number;
    local:Participante;
    visitante:Participante;
    id_competencia:Competencia["id"];
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
    fecha_bajata:Date;

}

export interface Competencia {
    nombre: string;
    id:string;
    estado:number;
    fecha_baja:null | undefined;
fecha_inicio:string;
fecha_creacion: string;
usuario?: Usuario | undefined;
  }