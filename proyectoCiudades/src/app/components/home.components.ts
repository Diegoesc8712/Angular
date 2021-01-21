import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent{
    public titulo: string;

    constructor(){
        this.titulo = 'Gran sistema ';
    }
    ngOnInit(){
        console.log('Se ha cargado el componente Error');
    }
}
