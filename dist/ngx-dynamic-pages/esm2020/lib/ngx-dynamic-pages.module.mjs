import { NgModule } from '@angular/core';
import { NgxDynamicPagesComponent } from './ngx-dynamic-pages.component';
import { NgxDynamicPagesService } from './ngx-dynamic-pages.service';
import { DynamicComponentDirective } from './core/directive/dynamic-component.directive';
import { GetDynamicComponentPipe } from './core/pipes/get-component.pipe';
import { CommonModule } from '@angular/common';
import { DynamicSelectorComponent } from './core/dynamic-selector/dynamic-selector.component';
import * as i0 from "@angular/core";
export class NgxDynamicPagesModule {
    static forRoot(configuration) {
        return {
            ngModule: NgxDynamicPagesModule,
            providers: [NgxDynamicPagesService, { provide: 'config', useValue: configuration }]
        };
    }
}
NgxDynamicPagesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxDynamicPagesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesModule, declarations: [NgxDynamicPagesComponent,
        DynamicComponentDirective,
        GetDynamicComponentPipe,
        DynamicSelectorComponent], imports: [CommonModule], exports: [NgxDynamicPagesComponent,
        DynamicSelectorComponent] });
NgxDynamicPagesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesModule, providers: [
        NgxDynamicPagesService
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxDynamicPagesComponent,
                        DynamicComponentDirective,
                        GetDynamicComponentPipe,
                        DynamicSelectorComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgxDynamicPagesComponent,
                        DynamicSelectorComponent
                    ],
                    providers: [
                        NgxDynamicPagesService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWR5bmFtaWMtcGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWR5bmFtaWMtcGFnZXMvc3JjL2xpYi9uZ3gtZHluYW1pYy1wYWdlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOztBQXVCOUYsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWtDO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUM7U0FDcEYsQ0FBQztJQUNKLENBQUM7O21IQU5VLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQWhCOUIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsd0JBQXdCLGFBR3hCLFlBQVksYUFHWix3QkFBd0I7UUFDeEIsd0JBQXdCO29IQU1mLHFCQUFxQixhQUpyQjtRQUNULHNCQUFzQjtLQUN2QixZQVJDLFlBQVk7NEZBVUgscUJBQXFCO2tCQWxCakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neER5bmFtaWNQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWR5bmFtaWMtcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE5neER5bmFtaWNQYWdlc1NlcnZpY2UgfSBmcm9tICcuL25neC1keW5hbWljLXBhZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9kaXJlY3RpdmUvZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdldER5bmFtaWNDb21wb25lbnRQaXBlIH0gZnJvbSAnLi9jb3JlL3BpcGVzL2dldC1jb21wb25lbnQucGlwZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHluYW1pY1NlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2R5bmFtaWMtc2VsZWN0b3IvZHluYW1pYy1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUR5bmFtaWNQYWdlc0NvbmZpZyB9IGZyb20gJy4vY29yZS9pbnRlcmZhY2VzL2R5bmFtaWMtcGFnZXMtY29uZmlnLmludGVyZmFjZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hEeW5hbWljUGFnZXNDb21wb25lbnQsXG4gICAgRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZSxcbiAgICBHZXREeW5hbWljQ29tcG9uZW50UGlwZSxcbiAgICBEeW5hbWljU2VsZWN0b3JDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4RHluYW1pY1BhZ2VzQ29tcG9uZW50LFxuICAgIER5bmFtaWNTZWxlY3RvckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hEeW5hbWljUGFnZXNTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHluYW1pY1BhZ2VzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbjogSUR5bmFtaWNQYWdlc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Tmd4RHluYW1pY1BhZ2VzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hEeW5hbWljUGFnZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtOZ3hEeW5hbWljUGFnZXNTZXJ2aWNlLCB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlndXJhdGlvbiB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==