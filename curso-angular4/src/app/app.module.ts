import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { plantillasComponent } from './plantillas/plantillas.component';
import { HijoComponent } from './hijo/hijo.component';

import { ConversorPipe } from './pipes/conversores.pipe';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrutaComponent,
    EmpleadoComponent,
    ContactoComponent,
    CochesComponent,
    plantillasComponent,
    HijoComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
