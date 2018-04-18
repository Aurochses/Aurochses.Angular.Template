import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MenuItemModel } from '../../../models/menu-item.model';
import { MenuService } from '../../../services/menu.service';

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

  constructor(private menuService: MenuService) {

  }

}
