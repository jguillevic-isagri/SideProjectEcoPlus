import { Routes } from '@angular/router';

export class UserRoutes {
    public static readonly displayLoginRoute: string = 'login';
    public static readonly userRoutes: Routes = [
        {
            path: UserRoutes.displayLoginRoute,
            title: 'Se connecter',
            loadComponent: () => import('../ui/page/login-page/login-page.component').then(module => module.LoginPageComponent)
        }
    ];
}