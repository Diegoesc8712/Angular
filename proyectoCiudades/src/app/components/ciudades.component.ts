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
    public confirmado;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _ciudadService: CiudadService
    ){
        this.titulo = 'Listado de Productos';
        this.confirmado = null;
    }
    ngOnInit(){
        this.getProductos();
    }

    getProductos(){
        this._ciudadService.getCiudades().subscribe(
            result => {
                // if (result.code != 200) {
                //     console.log(result);
                // }else{
                // }
                this.ciudades = result;
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    onDeleteCiudad(id){
        this._ciudadService.deleteCiudad(id).subscribe(
            result => {
                this.getProductos();
                // if (result.code == 200) {
                // }else{
                //     alert("Error al borrar ");
                // }
            },
            error => {
                console.log(<any>error);
            }
            );
        }
  
    borrarConfirm(id){
        this.confirmado = id
    }

    cancelarConfirm(){
        this.confirmado = null;
    }
}