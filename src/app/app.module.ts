import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CreaciontipificacionComponent } from './components/creacionmensajes/creaciontipificacion.component';
import { ListamensajesComponent } from './components/listamensajes/listamensajes.component';

import {MensajesService} from './services/mensajes.service';
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
    ListamensajesComponent,
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
  providers: [MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
