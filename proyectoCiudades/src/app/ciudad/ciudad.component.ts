import { Component } from '@angular/core';
import { Ciudad } from './ciudad';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PeticionesService } from './../services/peticiones.services';


@Component({
  selector: 'ciudades',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./styles.component.css'],
  providers: [PeticionesService]
  })

  export class CiudadComponent {
    public Titulo = 'Componente Ciudades';
    public articulos;


    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _peticionesService: PeticionesService
  ){}
      ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
          result => {
            console.log('hola');
              this.articulos = result;
              console.log(this.articulos);
              if (!this.articulos) {
              console.log("Error en el servidor");
              }
              },error=>{
              var errorMessage = <any>error;
              console.log("Error en el servidor1111");
              console.log(errorMessage);
          }
      );

      }
    redirigir(){
      this._router.navigate(['/ciudadNew']);
  }
  
  }

  
