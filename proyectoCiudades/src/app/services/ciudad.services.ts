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

    addCiudad(ciudad: Ciudad): Observable<any>{   
        let params = JSON.stringify(ciudad);
        let headers = new HttpHeaders().set('Content-Type','application/json');
         
        return this._http.post(this.url, params, {headers: headers});
    }

    getCiudades(): Observable<any>{
        let select = this.url;
        return this._http.get(select).pipe(map(res => res));
       
    }

    getCiudad(id): Observable<any>{
        let select = this.url+"/"+id;
        return this._http.get(select).pipe(map(res => res));
    }


    
    deleteCiudad(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/json');
        let select = this.url+"/"+id;
        return this._http.delete(select, {headers: headers});
    
    }

    editCiudad(ciudad: Ciudad): Observable<any> {

        let params = JSON.stringify(ciudad);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        let select = this.url+"/"+ciudad.cityid;

        return this._http.patch(select, params, {headers: headers});
        
    }
}
