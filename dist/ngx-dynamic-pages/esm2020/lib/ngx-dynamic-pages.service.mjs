import { Inject, Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NgxDynamicPagesService {
    constructor(router, configuration) {
        this.router = router;
        this.configuration = configuration;
        this.components$ = new Subject();
        this.config$ = new BehaviorSubject({});
        this.config$.next(this.configuration);
    }
    listenRoute() {
        this.router.events.subscribe((value) => {
            if (value instanceof NavigationEnd) {
                this.components$.next(this.findRouteComponents(value.url));
            }
        });
    }
    getDynamicPagesConfig() {
        return this.config$;
    }
    getComponents() {
        return this.components$;
    }
    findRouteComponents(route) {
        return this.configuration.jsonParameterize.find((router) => router.route === route);
    }
}
NgxDynamicPagesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesService, deps: [{ token: i1.Router }, { token: 'config' }], target: i0.ɵɵFactoryTarget.Injectable });
NgxDynamicPagesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR5bmFtaWMtcGFnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1keW5hbWljLXBhZ2VzL3NyYy9saWIvbmd4LWR5bmFtaWMtcGFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUs1RCxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLFlBQ1UsTUFBYyxFQUNJLGFBQWtDO1FBRHBELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDSSxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFMdEQsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBc0IsRUFBeUIsQ0FBQyxDQUFDO1FBTXBGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUMxQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHFCQUFxQjtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVNLGFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxLQUFhO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7b0hBOUJVLHNCQUFzQix3Q0FPdkIsUUFBUTt3SEFQUCxzQkFBc0IsY0FGckIsTUFBTTs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFRSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJRHluYW1pY1BhZ2VzQ29uZmlnIH0gZnJvbSAnLi9jb3JlL2ludGVyZmFjZXMvZHluYW1pYy1wYWdlcy1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hEeW5hbWljUGFnZXNTZXJ2aWNlIHtcblxuICBwcml2YXRlIGNvbXBvbmVudHMkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJRHluYW1pY1BhZ2VzQ29uZmlnPih7fSBhcyBJRHluYW1pY1BhZ2VzQ29uZmlnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlndXJhdGlvbjogSUR5bmFtaWNQYWdlc0NvbmZpZ1xuICApIHtcbiAgICB0aGlzLmNvbmZpZyQubmV4dCh0aGlzLmNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgcHVibGljIGxpc3RlblJvdXRlKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzJC5uZXh0KHRoaXMuZmluZFJvdXRlQ29tcG9uZW50cyh2YWx1ZS51cmwpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREeW5hbWljUGFnZXNDb25maWcoKTogT2JzZXJ2YWJsZTxJRHluYW1pY1BhZ2VzQ29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnJDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21wb25lbnRzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cyQ7XG4gIH1cblxuICBwcml2YXRlIGZpbmRSb3V0ZUNvbXBvbmVudHMocm91dGU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi5qc29uUGFyYW1ldGVyaXplLmZpbmQoKHJvdXRlcjogYW55KSA9PiByb3V0ZXIucm91dGUgPT09IHJvdXRlKTtcbiAgfVxufVxuIl19