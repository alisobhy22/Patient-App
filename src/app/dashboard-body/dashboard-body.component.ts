import { Component } from '@angular/core';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent {
  faCalendarDays = faCalendarDays;
}
