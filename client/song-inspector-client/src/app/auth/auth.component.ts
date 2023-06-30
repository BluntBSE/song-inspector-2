import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../localservice.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
    private http: HttpClient,
  ){

//Constructor
  }
    

  ngOnInit(){

    console.log("AuthComponent ngOnInit called")
    console.log("this.route: " + this.route)
    console.log("Token is" + this.route.snapshot.queryParamMap.get('code'))

    let code = this.route.snapshot.queryParamMap.get('code')

    this.localService.saveData('currentUser', code as string)



    this.http.get('http://localhost:8081/get_authorization?code='+code).subscribe((data: any) => {
  
      const myToken =(data.access_token)

      const headers = {
        'Authorization': 'Bearer ' + myToken
      }



      this.router.navigate(['/home'], { queryParams: { token: myToken } });

      this.http.get('http://localhost:8081/user?token='+ myToken).subscribe((data: any) => {
        console.log(data)
      })

    })

 


    //this.router.navigate(['/home']);
  }
    

}
