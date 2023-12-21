import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { HomeRoutes } from '../../../../home/route/home.routes';
import { UserRoutes } from '../../../../user/route/user.routes';

@Component({
    selector: 'app-top-bar',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
    public constructor(
    private router: Router
    ) { }

    public goToHome(): Observable<boolean> {
        return from(this.router.navigate([HomeRoutes.displayHomeRoute]));
    }

    public goToLogin(): Observable<boolean> {
        return from(this.router.navigate([UserRoutes.displayLoginRoute]));
    }
}
