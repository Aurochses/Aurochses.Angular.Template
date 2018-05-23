import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { TemplateService } from '../services/template.service';

@Component({
    selector: 'aur-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

    private _mobileQueryListener: () => void;

    public mobileQuery: MediaQueryList;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public templateService: TemplateService) {
        this.mobileQuery = media.matchMedia('(max-width: 599px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
        if (this.mobileQuery.matches) {
            this.templateService.settings.sidenav.open = false;
        }
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    onOpenedChange(opened: boolean) {
        this.templateService.settings.sidenav.open = opened;
    }

}
