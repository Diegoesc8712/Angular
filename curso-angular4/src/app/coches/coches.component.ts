import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';



@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesService
    ){  
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda", "120", "banco"),
            new Coche("Mazda", "180", "negro")
        ];
    }
    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                console.log(this.articulos);
                if (!this.articulos) {
                    console.log("Error en el servidor");
                }
                },error=>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
       this.coches.push(this.coche);
       this.coche = new Coche("", "", "");
    }
}