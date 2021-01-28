import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'componente-hijo',
    template: `<p>este es el {{titulo}}</p>
            <ul>
                <li>{{propiedad_uno}}</li>
                <li>{{propiedad_dos}}</li>
            </ul>
            <button (click)="enviar($event)">enviar</button>
        `
  })

  export class HijoComponent{
        public titulo: string;
        @Input('texto1') propiedad_uno:string;
        @Input('texto2') propiedad_dos:string;

        @Output() desde_el_hijo = new EventEmitter();
        
        constructor(){
            this.titulo = "Componente Hijo";
            
        }
        
        ngOnInit(){
            console.info (this.propiedad_uno);
            console.info (this.propiedad_dos);

        }

        enviar(event){
            this.desde_el_hijo.emit({
                nombre: 'Diego Escobar Web',
                web: 'diegoescobarweb.co',
                twitter: '@diegoesc871'
            });
        }

  }