import { Component } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  faPlus = faPlus;
  faCloudArrowDown = faCloudArrowDown;
}
