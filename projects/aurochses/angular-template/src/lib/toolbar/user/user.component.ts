import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { AuthenticationService, UserModel, UserProfileModel } from '@aurochses/angular-auth';

import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'aur-toolbar-user',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  userProfile: UserProfileModel;

  constructor(private router: Router, private authenticationService: AuthenticationService, private templateService: TemplateService) { }

  ngOnInit() {
    this.authenticationService.userLoadededEvent
      .subscribe(
        (user: UserModel) => {
          if (user) {
            this.userProfile = user.profile;
          } else {
            this.userProfile = null;
          }
        }
      );

    if (this.templateService.settings.toolbar.user.allowSilentSignIn) {
      this.authenticationService.trySilentSignIn();
    } else {
      this.authenticationService.loadUser();
    }
  }

  signIn() {
    this.authenticationService.signInRedirect(this.router.url);
  }

  signOut() {
    if (this.templateService.settings.toolbar.user.allowSilentSignIn) {
      this.authenticationService.signOutRedirect();
    } else {
      this.authenticationService.removeUser();
    }
  }

}
