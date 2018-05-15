import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MenuItemModel } from '../../../models/menu-item.model';

@Component({
  selector: 'aur-sidenav-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['menu-item.component.scss'],
  animations: [
    trigger('expandIconRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuItemComponent {

  @Input() menuItem: MenuItemModel;
  @Input() depth: number;

  expanded: boolean;

  constructor(private router: Router) { }

  isActive(): boolean {
    if (this.menuItem.path === '/') {
      return this.router.url === this.menuItem.path;
    }

    return this.menuItem.path ? this.router.isActive(this.menuItem.path, false) : false;
  }

  onMenuItemSelected(menuItem: MenuItemModel) {
    if (menuItem.children && menuItem.children.length) {
      this.expanded = !this.expanded;
    } else {
      this.router.navigate([menuItem.path]);
    }
  }

}
