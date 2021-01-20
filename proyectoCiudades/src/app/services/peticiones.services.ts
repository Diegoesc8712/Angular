import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from  'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(private _http: HttpClient){
        this.url = "https://testing.axon.com.co/pos/api/v1/city";
    }

    getArticulos(): Observable<any>{
        
        return this._http.get(this.url);
                         
    }
    getPrueba(){
        return 'Hola Mundo';
    }
}
