import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
  })

  export class EmpleadoComponent {
    public Titulo = 'Componente Empleados:';

    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
      this.empleado = new Empleado('Diego', 33, 'dev', true);
      this.trabajadores = [
        new Empleado('Diego', 33, 'dev', true),
        new Empleado('Alejandro', 23, 'programador', false),
        new Empleado('Monica', 34, 'contadora', true)
      ];
      this.trabajador_externo= false;
      this.color = 'blue';
      this.color_seleccionado = '#ccc';

    }

    ngOnInit(){
      console.log(this.empleado);
      console.log(this.trabajadores);
    }

    cambiarExterno(valor){
      this.trabajador_externo = valor;

    }

    logColorSeleccionado(){
      console.log(this.color_seleccionado);
    }
  }