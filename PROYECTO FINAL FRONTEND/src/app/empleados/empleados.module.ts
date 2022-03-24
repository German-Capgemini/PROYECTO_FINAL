import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../rutas/app-routing.module';

import { EmpleadosComponent } from './empleados.component';


import { FormEmpleadoComponent } from './form/formEmpleado.component';
import { DetalleEmpleadosComponent } from './detalle-empleados/detalle-empleados.component';



@NgModule({
  declarations: [
    EmpleadosComponent,
    FormEmpleadoComponent,
    DetalleEmpleadosComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    EmpleadosComponent,
    FormEmpleadoComponent,
    DetalleEmpleadosComponent,


  ]
})
export class EmpleadosModule { }
