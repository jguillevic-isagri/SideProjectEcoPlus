import { Routes } from '@angular/router';
import { HomePageComponent } from './home/page/home-page/home-page.component';

export const routes: Routes = [
    { 
        title: 'Acceuil',
        path: 'home',
        component: HomePageComponent 
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
