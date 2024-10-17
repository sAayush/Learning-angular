import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './MyComponents/profile/profile.component';
import CounterComponent from './MyComponents/counter/counter.component';
import { GetsetComponent } from './MyComponents/getset/getset.component';
import { PanelComponent } from './MyComponents/panel/panel.component';
import { CommonModule, NgClass } from '@angular/common';
import { NgmodelComponent } from './MyComponents/ngmodel/ngmodel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, CounterComponent, GetsetComponent, PanelComponent, CommonModule, NgmodelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularbasics';
  counter = 10;
  name = 'aayush';
  reciveddata = '';
  dataRecived(data: string) {
    this.reciveddata = data;
  }
}
