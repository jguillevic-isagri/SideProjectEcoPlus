import { Routes } from '@angular/router';

export class MaintenanceRoutes {
    public static readonly displayLoginRoute: string = 'maintenance';
    public static readonly maintenanceRoutes: Routes = [
        {
            path: MaintenanceRoutes.displayLoginRoute,
            title: 'Se connecter',
            loadComponent: () => import('../ui/page/maintenance-page/maintenance-page.component').then(module => module.MaintenancePageComponent)
        }
    ];
}