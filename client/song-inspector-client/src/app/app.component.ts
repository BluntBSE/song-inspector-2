import { Component, Output, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
  constructor(){}
  title = 'song-inspector-client';
  userToken = "";

  @Input() userTokenEmitter = function (){
    console.log("Emitter from parent called")
  }

  randomvar = "randomvar";

}
