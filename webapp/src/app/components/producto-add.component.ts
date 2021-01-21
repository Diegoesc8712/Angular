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
    }
}