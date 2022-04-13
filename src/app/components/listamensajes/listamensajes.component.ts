import { Component, OnInit, HostBinding } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import {MensajesService} from '../../services/mensajes.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { Router, ActivatedRoute } from '@angular/router';

import { Route } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';




@Component({
  selector: 'app-listatipificacion',
  templateUrl: './listamensajes.component.html',
  styleUrls: ['./listamensajes.component.css']

  
})



export class ListamensajesComponent implements OnInit {

  

  mostrar=false;
  
  mensaje: Mensaje = {
    id: 0,
    palabra1: '',
    palabra2: '',
    palabra3: '',
    palabra4: '',
    palabra5: '',
    //created_at: undefined
  };


  //para recibir
  mensajes: any = [];

  constructor(private mensajesService: MensajesService, private router: Router, private activatedRoute: ActivatedRoute) {

  
   }

  ngOnInit(): void {

   this.getTipificaciones();
}


getTipificaciones(){

  this.mensajesService.getTipificaciones().subscribe(
    res => {
    this.mensajes = res;
    },
    err => console.log(err)
    );

}
deleteT(id: string) {
  this.mensajesService.delete(id)
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




