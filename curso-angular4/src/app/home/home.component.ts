import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { RopaServices } from './../services/ropa.services';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaServices]
     
})
export class HomeComponent{
    public titulo = "página principal";
    
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;
    public fecha;
    public nombre = "Diego escobar";
    
    constructor(
        private _ropaServices: RopaServices
    ){
        this.fecha = new Date();
    }

    ngOnInit(){
        this.listado_ropa = this._ropaServices.getRopa();
        console.log(this.listado_ropa);
    }

    guardarPrenda(){
        this._ropaServices.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }
    eliminarPrenda(index:number){
        this._ropaServices.deleteRopa(index);
    }
}
