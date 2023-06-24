import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from './app.config';


@Injectable({
  providedIn: 'root'
})
export class QueryService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig) {

      console.log("QueryService constructor called");
      console.log("config: " + config);
   
   
  }
   mystr = "string from config"
   myvar = this.config;
  
}
