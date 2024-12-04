import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user : IUser | null = null
  showSignOutMenu: boolean = false;
  

  constructor(private UserService : UserService) { }

  ngOnInit() {
    this.UserService.getUser().subscribe({
      next : (user) => {this.user = user}
    })
    
  }
  toggleSignOutMenu(){
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(){
    this.UserService.signOut();
    this.showSignOutMenu = false;
  }



}
