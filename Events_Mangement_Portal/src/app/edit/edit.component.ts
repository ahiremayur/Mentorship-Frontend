import { Component ,Output,EventEmitter} from '@angular/core';
import events from 'src/event-data.json';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  event = events.events[0];
  submit(){
    
  }
}
