import { Routes } from '@angular/router';
import { HomePageComponent } from './home/page/home-page/home-page.component';

export const homeRoute: string = '';

export const routes: Routes = [
    { 
        title: 'Acceuil',
        path: homeRoute,
        component: HomePageComponent 
    },
    {
        path: '**',
        redirectTo: homeRoute
    }
];
