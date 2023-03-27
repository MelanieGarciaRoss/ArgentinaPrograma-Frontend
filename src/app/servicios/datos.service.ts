import { Injectable } from '@angular/core';
//Suscribe los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
//Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {      
  constructor(private http:HttpClient) { }

  getDatos():Observable<any>{
        return this.http.get('./assets/db/datos.json');
      }
}
