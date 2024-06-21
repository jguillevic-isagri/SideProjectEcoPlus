import { Component, inject } from '@angular/core';
import { MaintenanceService } from '../../../service/maintenance.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-page.component.html',
  styleUrl: './maintenance-page.component.scss'
})
export class MaintenancePageComponent {

private maintenanceService = inject(MaintenanceService);

developpers = this.maintenanceService.getDeveloppers();
weeks = this.maintenanceService.getWeeks();

}
