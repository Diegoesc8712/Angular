import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componentes 
import { HomeComponent } from './components/home.components';
import { ErrorComponent } from './components/error.components';
import { CiudadesComponent } from './components/ciudades.component';
import { CiudadesAddComponent } from './components/ciudades-add.component';




const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ciudades', component: CiudadesComponent},
    {path: 'crear-ciudad', component: CiudadesAddComponent},
    {path: '**', component: ErrorComponent}
    
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


