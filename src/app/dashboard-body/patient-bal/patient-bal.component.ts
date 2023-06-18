import { Component } from '@angular/core';
import {faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-bal',
  templateUrl: './patient-bal.component.html',
  styleUrls: ['./patient-bal.component.css']
})
export class PatientBalComponent {
  faHandHoldingDollar = faHandHoldingDollar;
}
