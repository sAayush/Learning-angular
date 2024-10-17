import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Output() dataEvent = new EventEmitter<string>();
  sendData(){
    this.dataEvent.emit('Hello from panel');
  }
}
