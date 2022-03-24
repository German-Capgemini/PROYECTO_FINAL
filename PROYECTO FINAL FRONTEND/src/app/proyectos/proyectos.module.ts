import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { FormProyectoComponent } from './form/form-proyecto.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../rutas/app-routing.module';



@NgModule({
  declarations: [
    ProyectosComponent,
    FormProyectoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    ProyectosComponent,
    FormProyectoComponent,

  ]
})

export class ProyectosModule { }
