import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from  'rxjs/Observable';
import { Producto } from '../components/models/producto';
import { GLOBAL } from './global';

import {map} from 'rxjs/operators';
import { profile } from 'console';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable()
export class ProductoService{
    public url:string;

    constructor(
        private _http: HttpClient
        ){
        this.url = GLOBAL.url;
    }

    getProductos(): Observable<any>{
        let select = this.url+'productos';
        return this._http.get(select).pipe(map(res => res));
    }

    addProducto(producto: Producto): Observable<any>{   
        let json = JSON.stringify(producto);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        return this._http.post(this.url+'productos', params, {headers: headers});
    }

    
}
