import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from  'rxjs/Observable';
import { Ciudad } from '../components/models/ciudad';
import { GLOBAL } from './global';

import {map} from 'rxjs/operators';

@Injectable()
export class CiudadService{
    public url:string;

    constructor(private _http: HttpClient){
        // this.url = "https://testing.axon.com.co/pos/api/v1/city";
        this.url = GLOBAL.url;
    }

    getCiudades(): Observable<any>{
        let select = this.url+'ciudades';
        return this._http.get(select).pipe(map(res => res));
       
    }

    getCiudad(id): Observable<any>{
        let select = this.url+'ciudades/'+id;
        return this._http.get(select).pipe(map(res => res));
    }

    addCiudad(ciudad: Ciudad): Observable<any>{   
        let json = JSON.stringify(ciudad);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        return this._http.post(this.url+'ciudades', params, {headers: headers}).pipe(map(res => res));
    }

    editCiudad(id, ciudad:Ciudad){
        let json = JSON.stringify(ciudad);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        
        return this._http.post(this.url+'update-ciudad/'+id, params, {headers: headers}).pipe(map(res => res));
    }
}
