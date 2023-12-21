import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './layout/ui/component/top-bar/top-bar.component';
import { MainComponent } from './layout/ui/component/main/main.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        TopBarComponent,
        MainComponent
    ]
})
export class AppComponent {
    title = 'SideProjectEcoPlus';
}
