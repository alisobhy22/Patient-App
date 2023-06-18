import { Component } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  faUser = faUser;
  faClipboard = faClipboard;
  faPaperPlane = faPaperPlane;
}
