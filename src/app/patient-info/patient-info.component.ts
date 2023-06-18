import { Component } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faHashtag} from '@fortawesome/free-solid-svg-icons';
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons';
import { faMarsAndVenus } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent {
  faStar = faStar;
  faBars = faBars;
  faUser = faUser;
  faHashtag = faHashtag;
  faCakeCandles = faCakeCandles;
  faMarsAndVenus = faMarsAndVenus;
  faMobileScreenButton = faMobileScreenButton;
  faPhone = faPhone;
  faStethoscope = faStethoscope;
  faIdCard = faIdCard;
  faEnvelope = faEnvelope;
  faHandHoldingDollar = faHandHoldingDollar;
  faLink = faLink;
  faCommentSms = faCommentSms;
}
