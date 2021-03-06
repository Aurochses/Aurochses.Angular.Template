import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'aur-sidenav-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getActivatedRouteData()
      .subscribe((routeData) => this.title = routeData.title);
  }

}
