

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-detalle-empleados',
  templateUrl: './detalle-empleados.component.html',
  styles: [
  ]
})
export class DetalleEmpleadosComponent implements OnInit {

  empleado!:Empleado;




  constructor( private empleadoService:EmpleadoService,
     private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activedRoute.paramMap.subscribe(
      params => {
        let id:number = +params.get('id')!;

        if(id){
          this.empleadoService.getEmpleado(id)
          .subscribe( resp => this.empleado = resp);
        }


      }
    );

  }






}
