import { Usuario } from "./usuarioDTO";

export class competenciaDTO {
  
    id:number=1;
    nombre: string="";
    estado:number=1;
    fecha_baja:null | undefined;
    fecha_inicio:string;
    fecha_creacion: string="";
    usuario?: Usuario | undefined;

    constructor(
        id: number,
        nombre: string,
        estado: number,
        fecha_inicio: string,
        fecha_creacion: string,
        fecha_baja: null // Modificado para aceptar valores nulos
      ) {
        this.id = id;
        this.nombre = nombre;
        this.estado = 1;
        this.fecha_inicio = fecha_inicio;
        this.fecha_creacion = fecha_creacion;
        this.fecha_baja = fecha_baja;
      }
    }

    export interface usuario2 {
      id: number;
      nombre:string;
    }

      export interface Competencia {
        nombre: string;
        id:number;
        estado:number;
        fecha_baja:null | undefined;
    fecha_inicio:string;
    fecha_creacion: string;
    usuario?: usuario2 | undefined;
      }

  