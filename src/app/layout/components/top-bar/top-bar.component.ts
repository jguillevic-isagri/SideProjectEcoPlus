import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { homeRoute } from '../../../app.routes';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  public constructor(
    private router: Router
  ) { }

  public goToHome(): Observable<boolean> {
    return from(this.router.navigate([homeRoute]));
  }
}
