import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

import { MenuItemModel } from '../models/menu-item.model';
import { RouteDataModel } from '../models/route-data.model';

@Injectable()
export class MenuService {

    private menuItems: Array<MenuItemModel>;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.menuItems = this.convert(this.router.config);
    }

    getMenuItems(): Array<MenuItemModel> {
        return this.menuItems;
    }

    private convert(routes: Route[], rootPath: string = ''): Array<MenuItemModel> {
        const items = new Array<MenuItemModel>();

        routes.forEach(
            route => {
                let path = rootPath;

                path += '/' + route.path;

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

    getActivatedRouteData(): Observable<RouteDataModel> {
        return this.getActivatedRouteObservable()
            .pipe(
                map(
                    (route) => {
                        while (route.firstChild) { route = route.firstChild; }
                        return route;
                    }
                ),
                filter((route) => route.outlet === 'primary'),
                mergeMap((route) => route.data),
                map((data) => <RouteDataModel>data)
            );
    }

    private getActivatedRouteObservable(): Observable<ActivatedRoute> {
        return this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                distinctUntilChanged(),
                map(() => this.activatedRoute)
            );
    }

}
