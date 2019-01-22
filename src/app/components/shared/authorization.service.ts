import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { Http, Headers } from "@angular/http";
import { Session } from 'protractor';
// import {jwtdecode} from 'jwt-decode';

const poolData = {
  UserPoolId: 'eu-central-1_LpM7o82ru',                     
  ClientId: '6mr3qvjpgd6754fdo6jbp2ann3'                    
  };

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthorizationService {
  cognitoUser: any;

  constructor(private http: Http) { }

  

  
  Regi(email, password) {
  
    var attributeList = [];
 
    return Observable.create(observer => {
      userPool.signUp(email, password, attributeList, null, (err, result) =>{
    if (err) {

        alert(err.message || JSON.stringify(err));
        observer.error(err);
        console.log('error singup');
        return;
    }
    this.cognitoUser = result.user;
    observer.next(result);
        });
    });
    
  }

 
  ConfAuthCode(confcod) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(confcod, true, function(err, result) {
        if (err) {
          // console.log(err);
          observer.error(err);
        }
        observer.next(result);
        observer.complete();
      });
    });
  }


  SignIn(email, password) {   

    const authenticationData = {
      // Email : email,
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      // Email : email,
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
  
    return Observable.create(observer => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {

          // ----------------------------------отримуємо id-Токен на успішний вхід--------------------------------------------(потім закоментити)
          var currentUser = userPool.getCurrentUser();
          currentUser.getSession( (err, session) => {
          if (err) {
            console.log(err);
            return;
          }
          const token = session.getIdToken().getJwtToken();
          console.log('=================================================================================');
          console.log(token); 
          console.log('=================================================================================');
        });


          observer.next(result);
          observer.complete();
          
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);          
        },
      });

    });
  }




  getAuthenticatedUser() {
    
    return userPool.getCurrentUser();
  }
  
 
  isLoggedIn() {    
     return userPool.getCurrentUser() != null;
  }


  logOut() {
     this.getAuthenticatedUser().signOut();
     this.cognitoUser = null;
  }
}
