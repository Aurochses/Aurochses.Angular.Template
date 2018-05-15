import { Route } from '@angular/router';

import { RouteDataModel } from './route-data.model';

export class MenuItemModel {
    path: string;
    data: RouteDataModel;
    children: Array<MenuItemModel>;

    constructor(route: Route, path: string, children: Array<MenuItemModel>) {
        this.path = path;
        this.data = <RouteDataModel>route.data;
        this.children = children;
    }
}
