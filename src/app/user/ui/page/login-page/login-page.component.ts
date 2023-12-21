import { Component } from '@angular/core';
import { LoginFormComponent } from '../../component/login-form/login-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [
        LoginFormComponent,
        MatDividerModule,
        MatCardModule
    ]
})
export class LoginPageComponent {

}
