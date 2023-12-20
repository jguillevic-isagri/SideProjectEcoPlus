import { Routes } from '@angular/router';
import { HomeRoutes } from './home/route/home.routes';
import { UserRoutes } from './user/route/user.routes';

export const routes: Routes = [
    {
        path: '',
        children: HomeRoutes.homeRoutes
    },
    {
        path: '',
        children: UserRoutes.userRoutes
    },
    {
        path: '**',
        redirectTo: HomeRoutes.displayHomeRoute
    }
];
