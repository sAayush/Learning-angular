import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ngmodel.component.html',
  styleUrl: './ngmodel.component.css'
})
export class NgmodelComponent {
  name = '';
  desc = '';
  al(text: string) {
    alert(text);
  }
  constructor() {}

}
