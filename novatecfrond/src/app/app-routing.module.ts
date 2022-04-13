import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListatipificacionComponent } from './components/listatipificacion/listatipificacion.component';

import { CreaciontipificacionComponent } from './components/creaciontipificacion/creaciontipificacion.component';


const routes: Routes = [
{
  path:'',
redirectTo: '/crubtipificacion',
pathMatch:'full'

},

{
  path:'crubtipificacion',
 component:ListatipificacionComponent

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
