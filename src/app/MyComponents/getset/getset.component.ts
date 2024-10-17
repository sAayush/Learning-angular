import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.component.html',
  styleUrl: './getset.component.css'
})
export class GetsetComponent {
  private _name: string = '';

  @Input()
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

}
