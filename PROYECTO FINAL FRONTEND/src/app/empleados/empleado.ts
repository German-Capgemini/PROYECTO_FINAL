import { Departamento } from "../departamentos/departamento";
import { Proyecto } from "../proyectos/proyectos";

export class Empleado{
  id!:number;
  nombre!:string;
  apellido!:string;
  email!:string;
  direccion!:string;
  genero!:string;
  fecha!:string;
  telefono!:number;
  sueldo!:number;
  departamento!:Departamento;
  proyecto!:Proyecto;
}
