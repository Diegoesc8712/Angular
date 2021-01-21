import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { CiudadServices } from '../services/ciudad.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [CiudadServices]
     
})
export class HomeComponent{
    public titulo = "Página Principal";
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    redirigir(){
        this._router.navigate(['/ciudad']);
    }
    redirigir2(){
        this._router.navigate(['/ciudadNew']);
    }
}
