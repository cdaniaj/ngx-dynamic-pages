import { Pipe, PipeTransform } from "@angular/core";
import { NgxDynamicPagesService } from "../../ngx-dynamic-pages.service";
import { Observable } from "rxjs";

@Pipe({
    name: 'getDynamicComponent',
    pure: true
})
export class GetDynamicComponentPipe implements PipeTransform {

    constructor(private service: NgxDynamicPagesService) {}

    transform(value: any, key: string): Observable<any> {
        return new Observable<any>((observer) => {
            this.service.getDynamicPagesConfig()
            .subscribe(config => {
                let findComponent = config?.storeComponents.find((comp: any) => comp.key === key)?.component;
                observer.next(findComponent);
            });
        });
    }
}