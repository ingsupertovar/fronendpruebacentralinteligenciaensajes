import { Component, OnInit, HostBinding } from '@angular/core';
import { Estudiante } from 'src/app/models/mensaje';
import {TipificacionesService} from '../../services/tipificaciones.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { Router, ActivatedRoute } from '@angular/router';

import { Route } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';




@Component({
  selector: 'app-listatipificacion',
  templateUrl: './listatipificacion.component.html',
  styleUrls: ['./listatipificacion.component.css']

  
})



export class ListatipificacionComponent implements OnInit {

  

  mostrar=false;
  
  estudiante: Estudiante = {
    id: 0,
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    profesor: '',
    //created_at: undefined
  };



  
  //para recibir
  estudiantes: any = [];

  constructor(private tipificacionesService: TipificacionesService, private router: Router, private activatedRoute: ActivatedRoute) {

    
    
   }


 

  ngOnInit(): void {

   this.getTipificaciones();
}

getTipificaciones(){

  this.tipificacionesService.getTipificaciones().subscribe(
    res => {
    this.estudiantes = res;
    },
    err => console.log(err)
    );

}



deleteT(id: string) {
  this.tipificacionesService.delete(id)
    .subscribe(
      res => {
        console.log(res);
          this.getTipificaciones();
      },
      err => console.error(err)
    )
}




ms( ){

		const mostrar=true;

    }   

}




