import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/usuarios/auth.service';
import swal from 'sweetalert2';
import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyectos';


@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styles: [
  ]
})
export class FormProyectoComponent implements OnInit {

  titulo:string ="Nuevo Proyecto";

 proyecto = new Proyecto();



  constructor( private proyectoService:ProyectoService,
    private router:Router, private activatedRoute:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {


    if(this.authService.token){



      this.activatedRoute.paramMap.subscribe(
        params =>{
          let id = +params.get('id')!;
          if(id){
            this.proyectoService.getProyecto(id).subscribe(
              (resp) => this.proyecto = resp
            )
          }
        }
      );

    }else{
      swal('No esta autenticado','no autenticado','info');
      this.router.navigate(['/login']);

    }




  }

  compararRegion(o1:Proyecto,o2:Proyecto):boolean{
    if(o1 === undefined && o2 ===undefined){
      return true;
    }

    return o1 === null || o2===null ||
     o1===undefined ||
      o2===undefined ? false : o1.id===o2.id;

  }


  create():void{
    console.log("formulario enviado");
    console.log(this.proyecto);
    this.proyectoService.create(this.proyecto).subscribe(
      resp => {
        swal('Nuevo Proyecto',`${this.proyecto.nombre} creado con éxito`,'success');
        this.router.navigate(['/proyectos']);
      },
      err=>{
        console.log('Codigo de error backend',err.status);
      }
    );
  }

  update():void{
    console.log(this.proyecto);
    this.proyectoService.update(this.proyecto).subscribe(
      resp=>{
        this.router.navigate(['/proyectos']);
        swal('Proyecto Actualizado',`${this.proyecto.nombre}`,'success');
      },
      err=>{
        console.error('Codigo del error desde el backend'+err.status);
        console.error(err.error.errros)
      }
    );
  }


}


