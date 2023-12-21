import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    standalone: true,
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
    public constructor(
        private formBuilder: FormBuilder
    ) { }   
}
