import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos!: Proyecto[];

  constructor(private servicio:ProyectoService, public authService:AuthService) { }

  ngOnInit(): void {

    this.servicio.getProyectos().subscribe(
      resp => this.proyectos =resp
    );

    console.log(this.proyectos)
  }

  delete( proyecto:Proyecto):void{
    swal({
      title:'Está seguro?',
      text:`Seguro que desea eliminar al proyecto ${proyecto.nombre} `,
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
        this.servicio.delete(proyecto.id).subscribe(
          resp =>{
            this.proyectos = this.proyectos.filter(pro => pro !== proyecto)
            swal('proyecto eliminado', `proyecto ${proyecto.nombre} eliminado con éxito`,'success');
          }
        )
      }
    });

  }



}








