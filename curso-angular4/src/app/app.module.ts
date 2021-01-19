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

import { ConversorPipe } from './pipes/conversores.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrutaComponent,
    EmpleadoComponent,
    ContactoComponent,
    CochesComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
