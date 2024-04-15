import { Router } from '@angular/router';
import { IDynamicPagesConfig } from './core/interfaces/dynamic-pages-config.interface';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxDynamicPagesService {
    private router;
    private configuration;
    private components$;
    private config$;
    constructor(router: Router, configuration: IDynamicPagesConfig);
    listenRoute(): void;
    getDynamicPagesConfig(): Observable<IDynamicPagesConfig>;
    getComponents(): Observable<any>;
    private findRouteComponents;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDynamicPagesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDynamicPagesService>;
}
