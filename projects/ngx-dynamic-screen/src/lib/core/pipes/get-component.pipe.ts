import { Pipe, PipeTransform } from "@angular/core";
import { NgxDynamicScreenService } from "../../ngx-dynamic-screen.service";
import { Observable } from "rxjs";

@Pipe({
    name: 'getDynamicComponent',
    pure: true
})
export class GetDynamicComponentPipe implements PipeTransform {

    constructor(private service: NgxDynamicScreenService) {}

    transform(value: any, key: string): Observable<any> {
        return new Observable<any>((observer) => {
            this.service.getDynamicScreenConfig()
            .subscribe(config => {
                let findComponent = config?.storeComponents.find(comp => comp.key === key)?.component;
                observer.next(findComponent);
            });
        });
    }
}