import { Component } from '@angular/core';
import {NgbDateStruct,NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-demo';
  constructor(public cal :NgbCalendar){}

  choice =" ";
  selectedlaptop ="null";
  selectedmobile = "null"
}
