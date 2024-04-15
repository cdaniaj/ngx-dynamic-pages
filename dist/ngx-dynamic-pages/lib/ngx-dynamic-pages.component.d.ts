import { OnInit } from '@angular/core';
import { NgxDynamicPagesService } from './ngx-dynamic-pages.service';
import * as i0 from "@angular/core";
export declare class NgxDynamicPagesComponent implements OnInit {
    private service;
    routeComponents: any[];
    constructor(service: NgxDynamicPagesService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDynamicPagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxDynamicPagesComponent, "ngx-dynamic-Pages", never, {}, {}, never, never, false, never>;
}
