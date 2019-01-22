import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../shared/authorization.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  badVerification: boolean = false;


  constructor( private auth: AuthorizationService ) { }

  ngOnInit() {
  }

  loginBoi(user){
    console.log(user);
    
    const email = user.email;
    const password = user.password;
    this.auth.SignIn(email, password).subscribe((data) => {

      console.log('all good');
    }, (err)=> {
      this.badVerification = true;

    }); 
     
  }

}
