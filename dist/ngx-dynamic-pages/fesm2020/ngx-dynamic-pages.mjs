import * as i0 from '@angular/core';
import { Injectable, Inject, SimpleChange, Directive, Input, Pipe, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgxDynamicPagesService {
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

class DynamicComponentDirective {
    constructor(vcr) {
        this.vcr = vcr;
    }
    ngOnDestroy() {
        this.destroyComponent();
    }
    ngOnChanges(changes) {
        assertNotNullOrUndefined(this.component);
        let componentChanges;
        const shouldCreateNewComponent = changes['component'].previousValue !== changes['component'].currentValue
            ||
                changes['injector'].previousValue !== changes['injector'].currentValue;
        if (shouldCreateNewComponent) {
            this.destroyComponent();
            this.createComponent();
            componentChanges = this.makeComponentChanges(changes['inputs'], true);
        }
        componentChanges ?? (componentChanges = this.makeComponentChanges(changes['inputs'], false));
        assertNotNullOrUndefined(this.componentRef);
        if (changes['inputs']) {
            this.bindInputs(this.componentRef.instance, this.inputs ?? {}, this.componentRef.instance);
        }
        if (this.componentRef.instance.ngOnChanges) {
            this.componentRef.instance.ngOnChanges(componentChanges);
        }
    }
    makeComponentChanges(inputsChange, firstChange) {
        const previousInputs = inputsChange?.previousValue ?? {};
        const currentInputs = inputsChange?.currentValue ?? {};
        return Object.keys(currentInputs).reduce((acc, inputName) => {
            const currentInputValue = currentInputs[inputName];
            const previousInputValue = previousInputs[inputName];
            if (currentInputValue !== previousInputValue) {
                acc[inputName] = new SimpleChange(firstChange ? undefined : previousInputValue, currentInputValue, firstChange);
            }
            return acc;
        }, {});
    }
    createComponent() {
        this.componentRef = this.vcr.createComponent(this.component);
    }
    destroyComponent() {
        this.componentRef?.destroy();
        this.vcr.clear();
    }
    bindInputs(componentInputs, userInputs, componentInstance) {
        Object.keys(componentInputs)
            .forEach((key) => {
            const inputValue = userInputs[key];
            componentInstance[key] = inputValue;
        });
    }
}
DynamicComponentDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DynamicComponentDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
DynamicComponentDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: DynamicComponentDirective, selector: "[dynamic-component]", inputs: { component: ["dynamic-component", "component"], inputs: "inputs" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DynamicComponentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dynamic-component]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { component: [{
                type: Input,
                args: ['dynamic-component']
            }], inputs: [{
                type: Input
            }] } });
function assertNotNullOrUndefined(value) {
    if (value === null || value === undefined) {
        throw new Error("Cannot be undefined or null");
    }
}

class GetDynamicComponentPipe {
    constructor(service) {
        this.service = service;
    }
    transform(value, key) {
        return new Observable((observer) => {
            this.service.getDynamicPagesConfig()
                .subscribe(config => {
                let findComponent = config?.storeComponents.find((comp) => comp.key === key)?.component;
                observer.next(findComponent);
            });
        });
    }
}
GetDynamicComponentPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GetDynamicComponentPipe, deps: [{ token: NgxDynamicPagesService }], target: i0.ɵɵFactoryTarget.Pipe });
GetDynamicComponentPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: GetDynamicComponentPipe, name: "getDynamicComponent" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GetDynamicComponentPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getDynamicComponent',
                    pure: true
                }]
        }], ctorParameters: function () { return [{ type: NgxDynamicPagesService }]; } });

class DynamicSelectorComponent {
}
DynamicSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DynamicSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DynamicSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: DynamicSelectorComponent, selector: "ngx-dynamic-selector", inputs: { routeComponents: "routeComponents" }, ngImport: i0, template: "<ng-container *ngFor=\"let component of routeComponents\">\n    <ng-template \n      [inputs]=\"component.inputs\"\n      [dynamic-component]=\"component | getDynamicComponent :component.componentName | async\"\n    ></ng-template>\n</ng-container>", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: DynamicComponentDirective, selector: "[dynamic-component]", inputs: ["dynamic-component", "inputs"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }, { kind: "pipe", type: GetDynamicComponentPipe, name: "getDynamicComponent" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DynamicSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dynamic-selector', template: "<ng-container *ngFor=\"let component of routeComponents\">\n    <ng-template \n      [inputs]=\"component.inputs\"\n      [dynamic-component]=\"component | getDynamicComponent :component.componentName | async\"\n    ></ng-template>\n</ng-container>" }]
        }], propDecorators: { routeComponents: [{
                type: Input
            }] } });

class NgxDynamicPagesComponent {
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
NgxDynamicPagesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesComponent, deps: [{ token: NgxDynamicPagesService }], target: i0.ɵɵFactoryTarget.Component });
NgxDynamicPagesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: NgxDynamicPagesComponent, selector: "ngx-dynamic-Pages", ngImport: i0, template: `
    <ngx-dynamic-selector [routeComponents]="routeComponents"></ngx-dynamic-selector>
  `, isInline: true, dependencies: [{ kind: "component", type: DynamicSelectorComponent, selector: "ngx-dynamic-selector", inputs: ["routeComponents"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxDynamicPagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dynamic-Pages', template: `
    <ngx-dynamic-selector [routeComponents]="routeComponents"></ngx-dynamic-selector>
  ` }]
        }], ctorParameters: function () { return [{ type: NgxDynamicPagesService }]; } });

class NgxDynamicPagesModule {
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

/*
 * Public API Surface of ngx-dynamic-pages
 */
//export * from './lib/ngx-dynamic-pages.service';

/**
 * Generated bundle index. Do not edit.
 */

export { DynamicSelectorComponent, NgxDynamicPagesComponent, NgxDynamicPagesModule };
//# sourceMappingURL=ngx-dynamic-pages.mjs.map
