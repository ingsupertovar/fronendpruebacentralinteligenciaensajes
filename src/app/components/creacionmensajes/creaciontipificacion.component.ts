import { Component, OnInit, HostBinding } from '@angular/core';
import { Mensaje } from 'src/app/models/mensaje';
import {MensajesService} from '../../services/mensajes.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creaciontipificacion',
  templateUrl: './creaciontipificacion.component.html',
  styleUrls: ['./creaciontipificacion.component.css']
})
export class CreaciontipificacionComponent implements OnInit {

  

  @HostBinding('class') clases = 'row';

  mensaje: Mensaje = {
    id: 0,
    palabra1: '',
    palabra2: '',
    palabra3: '',
    palabra4: '',
    palabra5: '',
    //created_at: undefined
  };

  edit: boolean = false;
  message = '';

  

  constructor(private mensajeService: MensajesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
  
    

    console.log(params);
if(params['id']){
this.mensajeService.getTipificacion(params['id'])
.subscribe(
res=> {
  console.log(res);
this.mensaje = res;
this.edit = true;
},
err=> console.log(err)

)
}
  }

  CrearEstudiante() {
  delete this.mensaje.id;

    this.mensajeService.saveTipificacion(this.mensaje)
      .subscribe(
        res => {
          console.log(res);
       this.router.navigate(['/crubtipificacion']);
        },
        err => console.error(err)
      )
  }



 update(): void {
  this.mensajeService.update(this.mensaje.id, this.mensaje)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/crubtipificacion']);
        this.message = 'The tutorial was updated successfully!';
      },
      error => {
        console.log(error);
      });
}




ocultar(){


}
}
