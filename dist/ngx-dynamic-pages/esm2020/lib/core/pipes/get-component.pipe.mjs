import { Pipe } from "@angular/core";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-dynamic-pages.service";
export class GetDynamicComponentPipe {
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
GetDynamicComponentPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GetDynamicComponentPipe, deps: [{ token: i1.NgxDynamicPagesService }], target: i0.ɵɵFactoryTarget.Pipe });
GetDynamicComponentPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: GetDynamicComponentPipe, name: "getDynamicComponent" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: GetDynamicComponentPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'getDynamicComponent',
                    pure: true
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxDynamicPagesService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvbXBvbmVudC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWR5bmFtaWMtcGFnZXMvc3JjL2xpYi9jb3JlL3BpcGVzL2dldC1jb21wb25lbnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNbEMsTUFBTSxPQUFPLHVCQUF1QjtJQUVoQyxZQUFvQixPQUErQjtRQUEvQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUFHLENBQUM7SUFFdkQsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFXO1FBQzdCLE9BQU8sSUFBSSxVQUFVLENBQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO2lCQUNuQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksYUFBYSxHQUFHLE1BQU0sRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQztnQkFDN0YsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7cUhBWlEsdUJBQXVCO21IQUF2Qix1QkFBdUI7NEZBQXZCLHVCQUF1QjtrQkFKbkMsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUscUJBQXFCO29CQUMzQixJQUFJLEVBQUUsSUFBSTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmd4RHluYW1pY1BhZ2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi9uZ3gtZHluYW1pYy1wYWdlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdnZXREeW5hbWljQ29tcG9uZW50JyxcbiAgICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEdldER5bmFtaWNDb21wb25lbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE5neER5bmFtaWNQYWdlc1NlcnZpY2UpIHt9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwga2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55Pigob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXREeW5hbWljUGFnZXNDb25maWcoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShjb25maWcgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaW5kQ29tcG9uZW50ID0gY29uZmlnPy5zdG9yZUNvbXBvbmVudHMuZmluZCgoY29tcDogYW55KSA9PiBjb21wLmtleSA9PT0ga2V5KT8uY29tcG9uZW50O1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmluZENvbXBvbmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==