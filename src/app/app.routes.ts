import { Routes } from '@angular/router';
import { HomeRoutes } from './home/route/home.routes';
import { UserRoutes } from './user/route/user.routes';
import { MaintenanceRoutes } from './maintenance/route/maintenance.route';

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
        path: '',
        children: MaintenanceRoutes.maintenanceRoutes
    },
    {
        path: '**',
        redirectTo: HomeRoutes.displayHomeRoute
    }
];
