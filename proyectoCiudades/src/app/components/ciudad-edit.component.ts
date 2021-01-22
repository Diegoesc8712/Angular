import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CiudadService } from './../services/ciudad.services';
import { Ciudad } from './models/ciudad';
import { GLOBAL } from './../services/global';


@Component({
    selector: 'ciudad-edit',
    templateUrl: '../views/ciudades-add.html',
    providers: [CiudadService]
})

export class CiudadEditComponent{
    public titulo: string;
    public ciudad: Ciudad;

    constructor(
        private _ciudadService: CiudadService,
        private _route: ActivatedRoute,
        private _router: Router
        
        ){
        this.titulo = 'Editar Ciudad'
        this.ciudad = new Ciudad(1, 1, "", "", "");
    }
    ngOnInit(){
        console.log('ciudad edit cargado.ts');
        this.getCiudad();
    }

    onSubmit(){
        console.log(this.ciudad);   
        
        this._route.params.forEach((params: Params)=>{
            let id=params['cityid'];
            this._ciudadService.editCiudad(id, this.ciudad).subscribe(
                    response => {
                        this._router.navigate(['/ciudades']);
                    },
                    error => {
                        console.log(<any>error);
                    }
                );   
    
            });

    }

    getCiudad(){
        this._route.params.forEach((params: Params)=>{
            let id=params['cityid'];
                this._ciudadService.getCiudad(id).subscribe(
                    response => {
                        if (response.code == 200) {
                            this.ciudad = response.data;
                        }else{
                            this._router.navigate(['/ciudades']);
                        }
                    },
                    error => {
                        console.log(<any>error);
                    }
                )
        });
    }

}