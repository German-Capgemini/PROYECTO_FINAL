import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleComponent } from '../clientes/detalle/detalle.component';
import { DetalleEmpleadosComponent } from '../empleados/detalle-empleados/detalle-empleados.component';

import { EmpleadosComponent } from '../empleados/empleados.component';
import { FormEmpleadoComponent } from '../empleados/form/formEmpleado.component';
import { FormProyectoComponent } from '../proyectos/form/form-proyecto.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { LoginComponent } from '../usuarios/login/login.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'empleados',
    component: EmpleadosComponent
  },
  {
    path:'empleados/crear',
    component: FormEmpleadoComponent
  },
  {
    path:'empleados/editar/:id',
    component: FormEmpleadoComponent
  },
  {
    path:'empleados/ver/:id',
    component: DetalleEmpleadosComponent
  },
  {
    path:'proyectos',
    component: ProyectosComponent
  },
  {
    path:'proyectos/crear',
    component: FormProyectoComponent
  },
  {
    path:'proyectos/editar/:id',
    component: FormProyectoComponent
  },
  {
    path:'proyectos/ver/:id',
    component: DetalleEmpleadosComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'**',
    redirectTo:'empleados'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
