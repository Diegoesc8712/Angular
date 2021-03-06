import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CiudadService } from './../services/ciudad.services';
import { Ciudad } from './models/ciudad';



@Component({
    selector: 'ciudad-detail',
    templateUrl: '../views/ciudad.detail.html',
    providers: [CiudadService]
})
export class CiudadDetailComponent{
    public ciudad: Ciudad;

    constructor(
        private _ciudadService: CiudadService,
        private _route: ActivatedRoute,
        private _router: Router

    ){

        
    }
    ngOnInit(){
        this.getCiudad();
    }

    getCiudad(){
        this._route.params.forEach((params: Params)=>{
            let id=params['cityid'];

            this._ciudadService.getCiudad(id).subscribe(
                response => {
                    this.ciudad = response[0];
                    // if (response.code == 200) {
                    // }else{
                    //     this._router.navigate(['/ciudades']);
                    // }

                },
                error => {
                    console.log(<any>error)
                }
            );
        })
    }

}
