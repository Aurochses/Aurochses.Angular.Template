import { Component } from '@angular/core';

import { MenuItemModel } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'aur-sidenav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent {

  menuItems: Array<MenuItemModel>;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

}
