import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-dynamic-pages.service";
import * as i2 from "./core/dynamic-selector/dynamic-selector.component";
export class NgxDynamicPagesComponent {
    constructor(service) {
        this.service = service;
        this.service.listenRoute();
    }
    ngOnInit() {
        this.service.getComponents()
            .subscribe(value => {
            this.routeComponents = value.components;
        });
    }
}
NgxDynamicPagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesComponent, deps: [{ token: i1.NgxDynamicPagesService }], target: i0.ɵɵFactoryTarget.Component });
NgxDynamicPagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: NgxDynamicPagesComponent, selector: "ngx-dynamic-Pages", ngImport: i0, template: `
    <ngx-dynamic-selector [routeComponents]="routeComponents"></ngx-dynamic-selector>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.DynamicSelectorComponent, selector: "ngx-dynamic-selector", inputs: ["routeComponents"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dynamic-Pages', template: `
    <ngx-dynamic-selector [routeComponents]="routeComponents"></ngx-dynamic-selector>
  ` }]
        }], ctorParameters: function () { return [{ type: i1.NgxDynamicPagesService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR5bmFtaWMtcGFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWR5bmFtaWMtcGFnZXMvc3JjL2xpYi9uZ3gtZHluYW1pYy1wYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQVVsRCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFlBQW9CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTthQUMzQixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0hBWlUsd0JBQXdCOzBHQUF4Qix3QkFBd0IseURBTHpCOztHQUVUOzRGQUdVLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxtQkFBbUIsWUFDbkI7O0dBRVQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHluYW1pY1BhZ2VzU2VydmljZSB9IGZyb20gJy4vbmd4LWR5bmFtaWMtcGFnZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1keW5hbWljLVBhZ2VzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWR5bmFtaWMtc2VsZWN0b3IgW3JvdXRlQ29tcG9uZW50c109XCJyb3V0ZUNvbXBvbmVudHNcIj48L25neC1keW5hbWljLXNlbGVjdG9yPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neER5bmFtaWNQYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJvdXRlQ29tcG9uZW50cyE6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTmd4RHluYW1pY1BhZ2VzU2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZS5saXN0ZW5Sb3V0ZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmdldENvbXBvbmVudHMoKVxuICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy5yb3V0ZUNvbXBvbmVudHMgPSB2YWx1ZS5jb21wb25lbnRzO1xuICAgIH0pO1xuICB9XG59XG4iXX0=