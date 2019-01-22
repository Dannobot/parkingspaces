import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../shared/authorization.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor( private auth: AuthorizationService ) { }

  ngOnInit() {
  }

  register(user) {
    console.log(user);

    const email = user.email;
    const password = user.password;
    this.auth.Regi(email, password).subscribe((data) => {

      console.log('all good');
    }, (err)=> {
      console.log('all bad');

    });
  }


}
