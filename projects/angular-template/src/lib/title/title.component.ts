import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Route, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MenuItemModel} from "../models/menu-item.model";

@Component({
  selector: 'aur-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title: string;

  constructor(private router: Router, public translate: TranslateService) { }

  ngOnInit() {
    this.title = this.getTitle(this.router.url);
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.title = this.getTitle(e.url);
      }
    });
  }

  private getTitle(route) {
    let obj = this.router.config.find((e) => e.path === route.substr(1));
    return obj.data.title;
  }

}
