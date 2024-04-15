import { PipeTransform } from "@angular/core";
import { NgxDynamicPagesService } from "../../ngx-dynamic-pages.service";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class GetDynamicComponentPipe implements PipeTransform {
    private service;
    constructor(service: NgxDynamicPagesService);
    transform(value: any, key: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetDynamicComponentPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GetDynamicComponentPipe, "getDynamicComponent", false>;
}
