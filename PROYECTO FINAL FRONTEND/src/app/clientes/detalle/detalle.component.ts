import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  cliente!:Cliente;
  fotoSeleccionada!:File;
  progreso!:number;


  constructor( private clienteService:ClienteService,
     private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activedRoute.paramMap.subscribe(
      params => {
        let id:number = +params.get('id')!;

        if(id){
          this.clienteService.getCliente(id)
          .subscribe( resp => this.cliente = resp);
        }


      }
    );

  }

  seleccionarImagen(event:any){
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
  }

  subirImagen():void{
    if(!this.fotoSeleccionada){
      swal('Error','Debe selecionar una imagen','error');

    }else{
      this.clienteService.subirImagen(this.fotoSeleccionada,this.cliente.id)
      .subscribe(event =>{

        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded/event.total!)*100);
        }else if(event.type === HttpEventType.Response){
          let response:any = event.body;
          this.cliente = response.cliente as Cliente;

          swal('La imagen se ha subido correctamente!',response.mensaje,'success');
        }

      });
    }
  }



}
