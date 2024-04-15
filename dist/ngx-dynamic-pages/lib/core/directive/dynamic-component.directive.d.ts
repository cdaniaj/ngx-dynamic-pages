import { ComponentRef, OnChanges, OnDestroy, SimpleChanges, Type, ViewContainerRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class DynamicComponentDirective implements OnChanges, OnDestroy {
    private vcr;
    component: Type<any>;
    inputs: any;
    componentRef: ComponentRef<any>;
    constructor(vcr: ViewContainerRef);
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private makeComponentChanges;
    private createComponent;
    private destroyComponent;
    private bindInputs;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DynamicComponentDirective, "[dynamic-component]", never, { "component": "dynamic-component"; "inputs": "inputs"; }, {}, never, never, false, never>;
}
