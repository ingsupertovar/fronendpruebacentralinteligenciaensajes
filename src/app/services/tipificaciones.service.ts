import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Estudiante} from '../models/estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipificacionesService {
    get(id: any) {
      throw new Error('Method not implemented.');
    }

 

    API_URI = 'http://localhost:8080/tipificacion';

    constructor(private http: HttpClient) { }

    getTipificaciones() {
      return this.http.get(`${this.API_URI}`);
    }

    getTipificacion(id: string) {
      return this.http.get(`${this.API_URI}/${id}`);
    }

    delete(id: string) {
      return this.http.delete(`${this.API_URI}/${id}`);
    }

    saveTipificacion(estudiante: Estudiante) {
      return this.http.post(`${this.API_URI}`, estudiante);
    }

  //  update(tipificacion: Tipificacion):  Observable<Tipificacion>{

    //  return this.http.put<Tipificacion>(this.API_URI , tipificacion);
   // }
  
  
   updateTipificacion(id: any, updateTipificacion: Estudiante): Observable<Estudiante> {
      return this.http.put(`${this.API_URI}/${id}`, updateTipificacion);
  }


 update(id: any, tipificacion: any): Observable<any> {
  return this.http.put(`${this.API_URI}/${id}`, tipificacion);
}

  }





