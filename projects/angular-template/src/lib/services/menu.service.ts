import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router } from '@angular/router';

import { MenuItemModel } from '../models/menu-item.model';
import { RouteDataModel } from '../models/route-data.model';

@Injectable()
export class MenuService {

    private menuItems: Array<MenuItemModel>;

    constructor(private router: Router) {
        this.menuItems = this.convert(router.config);
    }

    getMenuItems(): Array<MenuItemModel> {
        return this.menuItems;
    }

    getRouteTitle(route: ActivatedRouteSnapshot): string {
        return (<RouteDataModel>route.data).title;
    }

    private convert(routes: Route[], rootPath: string = ''): Array<MenuItemModel> {
        const items = new Array<MenuItemModel>();

        routes.forEach(
            route => {

                let path = rootPath;

                if (route.path.length > 0) {
                    path += '/' + route.path;
                }

                if (route.children) {
                    const childrenItems = this.convert(route.children, path);
                    if (route.data) {
                        items.push(new MenuItemModel(route, path, childrenItems));
                    } else {
                        childrenItems.forEach(
                            childrenItem => {
                                items.push(childrenItem);
                            }
                        );
                    }
                } else {
                    if (route.data) {
                        items.push(new MenuItemModel(route, path, null));
                    }
                }
            }
        );

        return items;
    }

}
