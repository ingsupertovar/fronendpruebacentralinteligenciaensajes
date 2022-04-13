import { Component, OnInit, HostBinding } from '@angular/core';
import { Estudiante } from 'src/app/models/mensaje';
import {TipificacionesService} from '../../services/tipificaciones.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creaciontipificacion',
  templateUrl: './creaciontipificacion.component.html',
  styleUrls: ['./creaciontipificacion.component.css']
})
export class CreaciontipificacionComponent implements OnInit {

  

  @HostBinding('class') clases = 'row';

  estudiante: Estudiante = {
    id: 0,
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    profesor: '',
  };

  edit: boolean = false;
  message = '';

  

  constructor(private tipificacionService: TipificacionesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
  
    

    console.log(params);
if(params['id']){
this.tipificacionService.getTipificacion(params['id'])
.subscribe(
res=> {
  console.log(res);
this.estudiante = res;
this.edit = true;
},
err=> console.log(err)

)
}
  }

  CrearEstudiante() {
  delete this.estudiante.id;

    this.tipificacionService.saveTipificacion(this.estudiante)
      .subscribe(
        res => {
          console.log(res);
       this.router.navigate(['/crubtipificacion']);
        },
        err => console.error(err)
      )
  }



 update(): void {
  this.tipificacionService.update(this.estudiante.id, this.estudiante)
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
