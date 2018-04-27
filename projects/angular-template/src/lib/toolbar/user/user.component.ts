import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { AuthenticationService, UserModel, UserProfileModel } from '@aurochses/angular-auth';

@Component({
  selector: 'aur-toolbar-user',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  userProfile: UserProfileModel;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.userLoadededEvent
      .subscribe(
        (user: UserModel) => {
          if (user) {
            this.userProfile = user.profile;
          } else {
            window.location.reload();
          }
        }
      );

    this.authenticationService.trySilentSignIn();
  }

  signIn() {
    this.authenticationService.signInRedirect(this.router.url);
  }

  signOut() {
    this.authenticationService.signOutRedirect();
  }

}
