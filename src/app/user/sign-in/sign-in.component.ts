import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials : IUserCredentials = {email : '' , password : ''};
  signInError : boolean = false;
  //IUserCredentials is the property that stores the signIn data when the user types the data
  constructor(private UserService : UserService, private router : Router) { }

  signIn( )
  {
    this.signInError = false;
    this.UserService.signIn(this.credentials).subscribe (
      {
        next : () => this.router.navigate(['/catalog']),
        error : () => (this.signInError = true)
      }
    );
    

  }

}
