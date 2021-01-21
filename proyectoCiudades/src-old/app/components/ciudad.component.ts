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
    public ciudades;


    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _peticionesService: PeticionesService
  ){}
      ngOnInit(){
        this._peticionesService.getCiudades().subscribe(
          result => {
              this.ciudades = result;
              if (!this.ciudades) {
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

  
