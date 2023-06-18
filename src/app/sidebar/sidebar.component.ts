import { Component } from '@angular/core';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faReceipt} from '@fortawesome/free-solid-svg-icons/faReceipt';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons/faClipboardList';
import {faFilePrescription} from '@fortawesome/free-solid-svg-icons/faFilePrescription';
import{faMicroscope} from '@fortawesome/free-solid-svg-icons/faMicroscope';
import {faFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faFileMedical} from '@fortawesome/free-solid-svg-icons/faFileMedical';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons/faCircleQuestion';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faGauge = faGauge;
  faCalendarDays = faCalendarDays;
  faUser = faUser;
  faReceipt = faReceipt;
  faClipboardList = faClipboardList;
  faFilePrescription = faFilePrescription;
  faMicroscope = faMicroscope;
  faFile = faFile;
  faFileMedical = faFileMedical;
  faGear = faGear;
  faCircleQuestion = faCircleQuestion;
  faRightFromBracket = faRightFromBracket;
}
