import { GLOBAL } from './../services/global';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductoService } from '../services/producto.services';
import { Producto } from './models/producto';

@Component({
    selector: 'productos-add',
    templateUrl: '../views/productos-add.html',
    providers: [ProductoService]
})

export class ProductosAddComponent{
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
        ){
            this.titulo = 'agregar producto';
            this.producto = new Producto(0, '', '', 0,'');
    }

    ngOnInit(){
        console.log('componente producto.add cargado');
    }

    onSubmit(){
        console.log(this.producto); 
        if (this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) => {
                console.log(result);
                this.resultUpload = result;
                this.producto.imagen = this.resultUpload.filename;
                this.saveProducto();
    
            }, (error) => {
                console.log(error);
            });
        }else{
            this.saveProducto();
        }

        
    }

    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if (response.code == 200) {
                    this._router.navigate(['/home']);
                }else{
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );   
    }



    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}