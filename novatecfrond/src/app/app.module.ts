import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CreaciontipificacionComponent } from './components/creaciontipificacion/creaciontipificacion.component';
import { ListatipificacionComponent } from './components/listatipificacion/listatipificacion.component';

import {TipificacionesService} from './services/tipificaciones.service';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    
    CreaciontipificacionComponent,
    ListatipificacionComponent,
    FileUploadComponent,
    
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,


  ],
  providers: [TipificacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
