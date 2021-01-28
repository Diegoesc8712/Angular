import { Component } from '@angular/core';


@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class plantillasComponent{
    public titulo;
    public administrador;

    public dato_externo = "Diego Escobar";
    public identy = {
        id: 1,
        web: 'diegodev.co',
        tematica: 'desarrollo web'
    }
    
    constructor(){  
        this.titulo = "plantillas ng template en Angular";
        this.administrador = true;
    }

    cambiar(value){

        this.administrador = value;
    }

    public datos_del_hijo: string;
    recibirDatos(event){
        this.datos_del_hijo = event;
    }
}