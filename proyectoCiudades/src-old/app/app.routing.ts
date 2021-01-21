import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componentes 
import { HomeComponent } from './home/home.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CiudadNewComponent } from './ciudad/ciudadnew.component';
import { CiudadEditComponent } from './ciudad/ciudadedit.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ciudad', component: CiudadComponent },
    {path: 'ciudadEdit', component: CiudadEditComponent },
    {path: 'ciudadNew', component: CiudadNewComponent },
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


