import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../localservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  
  constructor(
    private router: Router,
    private localService: LocalService,
    private route: ActivatedRoute,
  ){

//Constructor
  }
    

  ngOnInit(){

    console.log("AuthComponent ngOnInit called")
    console.log("this.route: " + this.route)
    console.log("Token is" + this.route.snapshot.queryParamMap.get('code'))

    let token = this.route.snapshot.queryParamMap.get('code')

    this.localService.saveData('currentUser', token as string)

    this.router.navigate(['/home']);
  }
    

}
