import { Component } from '@angular/core';


@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class plantillasComponent{
    public titulo;
    public administrador;
    
    constructor(){  
        this.titulo = "plantillas ng template en Angular";
        this.administrador = true;
    }

    cambiar(value){

        this.administrador = value;
    }
}