import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagos } from './pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
 
  
  //aqui va la api 
  private url:string="http://localhost:4200/pagos";
  
  constructor( private http:HttpClient ) { }
    
  //obtener pagos

   getAll():Observable<Pagos[]>{
   return this.http.get<Pagos[]>(this.url);
   }
    //crear pagos
   create(pagos:Pagos):Observable<Pagos>{
     return this.http.post<Pagos>(this.url, pagos);
   }
   //obtener pagos
   get(id:BigInteger):Observable<Pagos>{
    return this.http.get<Pagos>(this.url+'/'+'id');
  }
  //actializar un estudiante
  update(pagos:Pagos):Observable<Pagos>{
    return this.http.put<Pagos>(this.url, pagos);
  }
//eliminar pagos
  delete(id:BigInteger):Observable<Pagos>{
  return this.http.delete<Pagos>(this.url+'/'+'id');
   }

  }
