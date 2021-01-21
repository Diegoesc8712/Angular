import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadService } from '../services/ciudad.services';
import { Ciudad } from './models/ciudad';



@Component({
    selector: 'ciudades',
    templateUrl: '../views/ciudades.html',
    providers: [CiudadService]
})

export class CiudadesComponent{
    public titulo: string;
    public ciudades: Ciudad[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _ciudadService: CiudadService
    ){
        this.titulo = 'Listado de Productos';
    }
    ngOnInit(){
        this._ciudadService.getCiudades().subscribe(
            result => {
                if (result.code != 200) {
                    console.log(result);
                }else{
                    this.ciudades = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}