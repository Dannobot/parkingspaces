import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../shared/authorization.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";
  

  constructor() { }

  ngOnInit() {
  }

  registerUser(user) {
    console.log(user);
  }
	
}
