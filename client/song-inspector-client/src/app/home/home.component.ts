import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../query.service';
import { query } from '@angular/animations';

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
  constructor(
    private queryService: QueryService
  ){
    
    console.log("queryService: " + queryService);
    console.log("queryService.mystr: " + queryService.mystr);
    
  
 
  }
  title = 'home-component-title';
  some_str = this.queryService.mystr;
  //Next up, passing data to child components.


}
