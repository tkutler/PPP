import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {

  error: any;
  buttonTriggered = false;
  notFound: any;
  newUser = {first: "", last: "", email: "", address:"", city : "", state: "",  zip: "", password: "", passwordconfirm: ""}
  currentUser = {email: "", password: ""};
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {}
  
  //checks for login
  login(){
    //buttontriggered for when submit button gets pressed
    this.buttonTriggered = true;

    //observable takes data for login and checks it
    let tempObservable = this._httpService.signin(this.currentUser);
    tempObservable.subscribe (data =>{
      console.log("signing in the user", data)
      if (data['error']){
        this.notFound = data['error'];
        console.log("THESE ARE THE ERRORS", data['error'])
      }
      else{
      this._router.navigate(['/welcome']);
      }
      
    })

  }
  //registers and validates user
  register(){
    //for validation message on submits
    this.buttonTriggered = true;
    let tempObservable = this._httpService.addUser(this.newUser);
    tempObservable.subscribe (data =>{
      console.log("added the user")
      if (data['error']){
        console.log("THESE ARE THE ERRORS", data['error'])
      }
      else if(data == null){
        console.log("could not be found")
      }
      else {
        this._router.navigate(['/welcome']);
        
      }
    })

  }


}
