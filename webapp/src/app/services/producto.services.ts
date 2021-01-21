import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from  'rxjs/Observable';
import { Producto } from '../components/models/producto';
import { GLOBAL } from './global';

import {map} from 'rxjs/operators';

@Injectable()
export class ProductoService{
    public url:string;

    constructor(private _http: HttpClient){
        // this.url = "https://testing.axon.com.co/pos/api/v1/city";
        this.url = GLOBAL.url;
    }

    getProductos(): Observable<any>{
        return this._http.get(this.url+'productos');
    }
}
