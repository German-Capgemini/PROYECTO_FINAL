import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Departamento } from '../departamentos/departamento';
import { Proyecto } from '../proyectos/proyectos';
import { AuthService } from '../usuarios/auth.service';
import { Empleado } from './empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  urlEndPoint:string ="http://localhost:8087/api/empleado";

  constructor( private http:HttpClient,private authService:AuthService) { }

  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  agregarAuthorizationHeader():any{
    let token = this.authService.token;
    if(token != null){
      return this.httpHeaders.append('Authorization', 'Bearer '+token);
    }

    return this.httpHeaders;
  }


  getEmpleados():Observable<Empleado[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Empleado[] )
    );
  }

  //metodo de post para insertar Empleados
  create(empleado:Empleado):Observable<Empleado>{
    return this.http.post<Empleado>(this.urlEndPoint,empleado, { headers: this.agregarAuthorizationHeader() });
  }

  //buscar Empleado por id
  getEmpleado(id:number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlEndPoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }

  //actualizar Empleado
  update(empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(`${this.urlEndPoint}/${empleado.id}`, empleado,{ headers: this.agregarAuthorizationHeader() })
  }

  //eliminar Empleado
  delete(id:number):Observable<Empleado>{
    return this.http.delete<Empleado>(`${this.urlEndPoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }


  getDepartamentos():Observable<Departamento[]>{
     return this.http.get<Departamento[]>(`${this.urlEndPoint}/departamentos`,{ headers: this.agregarAuthorizationHeader() });
   }

   getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.urlEndPoint}/proyectos`,{ headers: this.agregarAuthorizationHeader() });
  }

  // //subir imagen
  // subirImagen(archivo: File, id:any):Observable<HttpEvent<any>>{
  //   let formData = new FormData();

  //   formData.append("archivo",archivo);
  //   formData.append("id",id);

  //   let httpHeaders = new HttpHeaders();

  //   let token= this.authService.token;

  //   if(token != null){
  //     httpHeaders = httpHeaders.append('Authorization','Bearer '+token);
  //   }

  //   const req = new HttpRequest('POST',`${this.urlEndPoint}/upload`,formData,{headers:httpHeaders});

  //   return this.http.request(req).pipe(
  //     resp =>resp
  //   );
  // }









}
