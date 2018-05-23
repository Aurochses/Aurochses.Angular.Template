import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { BreadcrumbModel } from '../../models/breadcrumb.model';

@Component({
  selector: 'aur-sidenav-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Array<BreadcrumbModel>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getBreadcrumb()
      .subscribe((breadcrumbs) => this.breadcrumbs = breadcrumbs);
  }

}
