import { Component } from '@angular/core';
@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
    // styleUrls: ['./fruta.component.css']
  })

  export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia'

    public nombre:string;
    public edad:number;
    public MayorEdad:boolean;
    public trabajos:Array<any>=['Carpintero', 'desarrollador', 55]
    comodin:any;


    constructor(){
      this.nombre = 'Diego';
      this.edad = 33;
      this.MayorEdad = true;
      this.comodin = 'Cualquier cosa';
    }

    ngOnInit(){
      this.cambiarNombre();
      this.cambiarEdad(25);

      console.log(this.nombre +" "+ this.edad);


      // variables var y let y su alcance
      var num1 = 8;
      var num2 = 15;
      if (num1 === 8) {
        let num1 = 3;
        var num2 = 88;

        console.log("dento del if "+num1+"    "+num2);
      }
      console.log("fuera del if "+num1+"    "+num2);

    }

    cambiarNombre(){
      this.nombre = 'Alejandro';
    }

    cambiarEdad(edad){
      this.edad = edad;
    }
  }