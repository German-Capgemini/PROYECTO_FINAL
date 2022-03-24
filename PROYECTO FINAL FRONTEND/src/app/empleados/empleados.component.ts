import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  imagenSrc!:string;
  empleados!: Empleado[];

  constructor(private servicio:EmpleadoService, public authService:AuthService) { }

  ngOnInit(): void {

    //this.imagenSrc = 'assets/avatar.jpg';

    this.servicio.getEmpleados().subscribe(
      resp => this.empleados =resp
    );
  }

  delete( empleado:Empleado):void{
    swal({
      title:'Está seguro?',
      text:`Seguro que desea eliminar al empleado ${empleado.nombre} ${empleado.apellido}`,
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, eliminar!',
      cancelButtonText:'No, cancelar!',
      confirmButtonClass:'btn btn-success',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:false,
      reverseButtons:true
    }).then((result)=>{
      if(result.value){
        this.servicio.delete(empleado.id).subscribe(
          resp =>{
            this.empleados = this.empleados.filter(emp => emp !== empleado)
            swal('Empleado eliminado', `Empleado ${empleado.nombre} eliminado con éxito`,'success');
          }
        )
      }
    });

  }



}
