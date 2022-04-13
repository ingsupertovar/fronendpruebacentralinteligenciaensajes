import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListamensajesComponent } from './components/listamensajes/listamensajes.component';

import { CreaciontipificacionComponent } from './components/creacionmensajes/creaciontipificacion.component';


const routes: Routes = [
{
  path:'',
redirectTo: '/crubtipificacion',
pathMatch:'full'

},

{
  path:'crubtipificacion',
 component:ListamensajesComponent

},





{
  path:'envio',
 component:CreaciontipificacionComponent

},

{
  path: 'crubtipificacion/edit/:id',
  component: CreaciontipificacionComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
