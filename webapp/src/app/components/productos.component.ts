import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from './../services/producto.services';
import { Producto } from './models/producto';



@Component({
    selector: 'productos',
    templateUrl: '../views/productos.html',
    providers: [ProductoService]
})

export class ProductosComponent{
    public titulo: string;
    public productos: Producto[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Listado de Productos';
    }
    ngOnInit(){
        this._productoService.getProductos().subscribe(
            result => {
                if (result.code != 200) {
                    console.log(result);
                }else{
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}