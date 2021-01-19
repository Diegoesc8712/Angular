import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'ciudades',
    templateUrl: './ciudad.component.html',
    styleUrls: ['./styles.component.css']
  })

  export class CiudadComponent {
    public Titulo = 'Componente Ciudades';
    constructor(
      private _route: ActivatedRoute,
      private _router: Router
  ){}

    redirigir(){
      this._router.navigate(['/ciudadNew']);
  }
  
  }

  
