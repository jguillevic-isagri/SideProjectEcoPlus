import { Routes } from '@angular/router';

export class HomeRoutes {
    public static readonly displayHomeRoute: string = '';
    public static readonly homeRoutes: Routes = [
        {
            path: HomeRoutes.displayHomeRoute,
            pathMatch: 'full',
            title: 'Accueil',
            loadComponent: () => import('../page/home-page/home-page.component').then(module => module.HomePageComponent)
        }
    ];
}