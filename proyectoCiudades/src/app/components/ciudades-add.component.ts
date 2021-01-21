import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CiudadService } from './../services/ciudad.services';


import { Ciudad } from './models/ciudad';

@Component({
    selector: 'ciudades-add',
    templateUrl: '../views/ciudades-add.html',
    providers: [CiudadService]
})

export class CiudadesAddComponent{
    public titulo: string;
    public ciudad: Ciudad;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _ciudadService: CiudadService
    ){
        this.titulo = 'Agregar Ciudad';
        this.ciudad = new Ciudad(0, 0, '', '', '');
    }

    ngOnInit(){
        console.log('componente ciudad.add cargado');
    }
    onSubmit(){
        console.log(this.ciudad);    
    }
}