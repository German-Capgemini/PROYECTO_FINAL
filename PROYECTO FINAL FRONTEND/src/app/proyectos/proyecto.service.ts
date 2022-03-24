import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AuthService } from '../usuarios/auth.service';
import { Proyecto } from './proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  urlEndPoint:string ="http://localhost:8087/api/proyecto";



  constructor( private http:HttpClient,private authService:AuthService) { }

  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  agregarAuthorizationHeader():any{
    let token = this.authService.token;
    if(token != null){
      return this.httpHeaders.append('Authorization', 'Bearer '+token);
    }

    return this.httpHeaders;
  }


  getProyectos():Observable<Proyecto[]>{
    return this.http.get(this.urlEndPoint, { headers: this.agregarAuthorizationHeader() }).pipe(
      map( (response) => response as Proyecto[] )
    );
  }

  //metodo de post para insertar clientes
  create(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.urlEndPoint,proyecto, { headers: this.agregarAuthorizationHeader() });
  }

  //buscar proyecto por id
  getProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.urlEndPoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }

  //actualizar proyecto
  update(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.urlEndPoint}/${proyecto.id}`, proyecto,{ headers: this.agregarAuthorizationHeader() })
  }

  //eliminar proyecto
  delete(id:number):Observable<Proyecto>{
    return this.http.delete<Proyecto>(`${this.urlEndPoint}/${id}`,{ headers: this.agregarAuthorizationHeader() })
  }












}

