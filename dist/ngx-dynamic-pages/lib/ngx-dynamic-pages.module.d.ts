import { ModuleWithProviders } from '@angular/core';
import { IDynamicPagesConfig } from './core/interfaces/dynamic-pages-config.interface';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-dynamic-pages.component";
import * as i2 from "./core/directive/dynamic-component.directive";
import * as i3 from "./core/pipes/get-component.pipe";
import * as i4 from "./core/dynamic-selector/dynamic-selector.component";
import * as i5 from "@angular/common";
export declare class NgxDynamicPagesModule {
    static forRoot(configuration: IDynamicPagesConfig): ModuleWithProviders<NgxDynamicPagesModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDynamicPagesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxDynamicPagesModule, [typeof i1.NgxDynamicPagesComponent, typeof i2.DynamicComponentDirective, typeof i3.GetDynamicComponentPipe, typeof i4.DynamicSelectorComponent], [typeof i5.CommonModule], [typeof i1.NgxDynamicPagesComponent, typeof i4.DynamicSelectorComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxDynamicPagesModule>;
}
