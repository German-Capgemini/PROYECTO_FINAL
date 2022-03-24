
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/departamentos/departamento';
import { Proyecto } from 'src/app/proyectos/proyectos';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-form',
  templateUrl: './formEmpleado.component.html',
  styles: [
  ]
})
export class FormEmpleadoComponent implements OnInit {

  titulo:string ="Nuevo Empleado";

  empleado: Empleado = new Empleado();
  departamentos!:Departamento[];
  proyectos!:Proyecto[];

  constructor( private empleadoService:EmpleadoService,
    private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.empleadoService.getDepartamentos().subscribe(
      resp => this.departamentos = resp

    );

    this.empleadoService.getProyectos().subscribe(
      resp => this.proyectos = resp
    );

      this.activatedRoute.paramMap.subscribe(
        params =>{
          let id = +params.get('id')!;
          if(id){
            this.empleadoService.getEmpleado(id).subscribe(
              (resp) => this.empleado = resp
            )
          }
        }
      );

      console.log(this.departamentos);
      console.log(this.proyectos);
  }

  compararDepartamento(o1:Departamento,o2:Departamento):boolean{
    if(o1 === undefined && o2 ===undefined){
      return true;
    }

    return o1 === null || o2===null ||
     o1===undefined ||
      o2===undefined ? false : o1.id===o2.id;

  }

  compararProyecto(o1:Proyecto,o2:Proyecto):boolean{
    if(o1 === undefined && o2 ===undefined){
      return true;
    }

    return o1 === null || o2===null ||
     o1===undefined ||
      o2===undefined ? false : o1.id===o2.id;

  }

  create():void{
    console.log("formulario enviado");
    console.log(this.empleado);
    this.empleadoService.create(this.empleado).subscribe(
      resp => {
        swal('Nuevo Empleado',`${this.empleado.nombre} creado con éxito`,'success');
        this.router.navigate(['/empleados']);
      },
      err=>{
        console.log('Codigo de error backend',err.status);
      }
    );
  }

  update():void{
    console.log(this.empleado);
    this.empleadoService.update(this.empleado).subscribe(
      resp=>{
        this.router.navigate(['/empleados']);
        swal('Empleado Actualizado',`${this.empleado.nombre}`,'success');
      },
      err=>{
        console.error('Codigo del error desde el backend'+err.status);
        console.error(err.error.errros)
      }
    );
  }

}
