import { Routes } from '@angular/router';
import { HomeRoutes } from './home/route/home.routes';

export const homeRoute: string = '';

export const routes: Routes = [
    {
        path: '',
        children: HomeRoutes.homeRoutes
    },
    {
        path: '**',
        redirectTo: HomeRoutes.displayHomeRoute
    }
];
