import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, UserProfileModel } from '@aurochses/angular-auth';

@Component({
  selector: 'aur-toolbar-user',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  userProfile: UserProfileModel;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log('ngOnInit');

    this.authenticationService.getUser().subscribe(user => {
      console.log('getUser');

      if (user) {
        console.log(user);

        this.userProfile = user.profile;
      }
    });
  }

  signIn(): void {
    this.authenticationService.signInRedirect(this.router.url);
  }

}
