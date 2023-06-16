import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles:[`
  :host{
    display:grid;
  };
  `,]
})
export class HomeComponent {
  title = 'home-component-title';
}
