import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './rutas/app-routing.module';
import { AppComponent } from './app.component';
import { ClienteService } from './clientes/cliente.service';
import { ClientesModule } from './clientes/clientes.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './usuarios/auth.service';

import { DepartamentosComponent } from './departamentos/departamentos.component';
import { EmpleadoService } from './empleados/empleado.service';
import { EmpleadosModule } from './empleados/empleados.module';

import { ProyectoService } from './proyectos/proyecto.service';
import { ProyectosModule } from './proyectos/proyectos.module';


@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    FooterModule,
    HeaderModule,
    UsuariosModule,
    HttpClientModule,
    EmpleadosModule,
    ProyectosModule


  ],
  providers: [
    ClienteService,
    EmpleadoService,
    ProyectoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
