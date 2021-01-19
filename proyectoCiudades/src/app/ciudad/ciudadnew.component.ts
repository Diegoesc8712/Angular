import { Component } from '@angular/core';
import { Ciudadnew } from './ciudadnew'

@Component({
    selector: 'ciudadesNew',
    templateUrl: './ciudadnew.component.html',
    styleUrls: ['./styles.component.css']
    
  })

  export class CiudadNewComponent {
    public Titulo = 'Nueva Ciudad:';
    public ciudadnew: Ciudadnew;

    constructor(){
      this.ciudadnew = new Ciudadnew("", "", "", "",);
    }
    onSubmit(){
      console.log(this.ciudadnew);
    }
    
  }