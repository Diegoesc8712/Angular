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

    constructor(){
      this.empleado = new Empleado('Diego', 33, 'dev', true);
      this.trabajadores = [
        new Empleado('Diego', 33, 'dev', true),
        new Empleado('Alejandro', 23, 'programador', false),
        new Empleado('Monica', 34, 'contadora', true)
      ];

    }

    ngOnInit(){
      console.log(this.empleado);
      console.log(this.trabajadores);
    }
  }