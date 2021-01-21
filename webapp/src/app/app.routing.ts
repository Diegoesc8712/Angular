import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componentes 
import { HomeComponent } from './components/home.components';
import { ErrorComponent } from './components/error.components';
import { ProductosComponent } from './components/productos.component';
import { ProductosAddComponent } from './components/producto-add.component';




const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'crear-producto', component: ProductosAddComponent},
    {path: '**', component: ErrorComponent}
    
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


