import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { MenuService } from '../../services/menu.service';
import { BreadcrumbModel } from '../../models/breadcrumb.model';

@Component({
  selector: 'aur-sidenav-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Array<BreadcrumbModel>;

  constructor(public translateService: TranslateService, private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getBreadcrumb()
      .subscribe((breadcrumbs) => this.breadcrumbs = breadcrumbs);
  }

}
