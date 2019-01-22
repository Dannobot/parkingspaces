import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../shared/authorization.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor( private auth: AuthorizationService ) { }

  ngOnInit() {
  }

  AuthCode(code) {
    console.log(code.emailconfirm);
    const confcod = code.emailconfirm;
    
    this.auth.ConfAuthCode(confcod).subscribe((data) => {

      console.log('good good');
    }, (err)=> {
      console.log('bad bad');

    });
  }

}
