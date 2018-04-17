import { Component } from '@angular/core';

import { MenuItemModel } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'aur-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  menuItems: Array<MenuItemModel>;

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

}
