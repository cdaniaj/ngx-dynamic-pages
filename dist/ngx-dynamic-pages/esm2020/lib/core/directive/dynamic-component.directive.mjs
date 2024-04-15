import { Directive, Input, SimpleChange } from "@angular/core";
import * as i0 from "@angular/core";
export class DynamicComponentDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWR5bmFtaWMtcGFnZXMvc3JjL2xpYi9jb3JlL2RpcmVjdGl2ZS9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQyxTQUFTLEVBQUUsS0FBSyxFQUF3QixZQUFZLEVBQXlDLE1BQU0sZUFBZSxDQUFDOztBQWE1SixNQUFNLE9BQU8seUJBQXlCO0lBT2xDLFlBQW9CLEdBQXFCO1FBQXJCLFFBQUcsR0FBSCxHQUFHLENBQWtCO0lBQUcsQ0FBQztJQUU3QyxXQUFXO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5Qix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekMsSUFBSSxnQkFBOEMsQ0FBQztRQUNuRCxNQUFNLHdCQUF3QixHQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZOztnQkFFeEUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRTNFLElBQUksd0JBQXdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXZCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekU7UUFFRCxnQkFBZ0IsS0FBaEIsZ0JBQWdCLEdBQUssSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBQztRQUV6RSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFNUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQXNCLENBQUMsV0FBVyxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFlBQTBCLEVBQUUsV0FBb0I7UUFDekUsTUFBTSxjQUFjLEdBQUcsWUFBWSxFQUFFLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxhQUFhLEdBQUcsWUFBWSxFQUFFLFlBQVksSUFBSSxFQUFFLENBQUM7UUFFdkQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN4RCxNQUFNLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRCxNQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFJLGlCQUFpQixLQUFLLGtCQUFrQixFQUFFO2dCQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ25IO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUUsRUFBa0MsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxlQUFlO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxVQUFVLENBQUMsZUFBZ0MsRUFBRSxVQUFzQixFQUFFLGlCQUFzQjtRQUMvRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUMzQixPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUNyQixNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7dUhBdkVRLHlCQUF5QjsyR0FBekIseUJBQXlCOzRGQUF6Qix5QkFBeUI7a0JBSnJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtpQkFDbEM7dUdBSStCLFNBQVM7c0JBQXBDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUNqQixNQUFNO3NCQUFkLEtBQUs7O0FBdUVWLFNBQVMsd0JBQXdCLENBQUksS0FBUTtJQUN6QyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDbEQ7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG50eXBlIFVzZXJPdXRwdXRzID0gUmVjb3JkPHN0cmluZywgKGV2ZW50OiBhbnkpID0+IHZvaWQ+O1xudHlwZSBVc2VySW5wdXRzID0gUmVjb3JkPHN0cmluZywgYW55PjtcbnR5cGUgQ29tcG9uZW50SW5wdXRzID0gQ29tcG9uZW50RmFjdG9yeTxhbnk+WydpbnB1dHMnXTtcbnR5cGUgQ29tcG9uZW50T3V0cHV0cyA9IENvbXBvbmVudEZhY3Rvcnk8YW55Plsnb3V0cHV0cyddO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2R5bmFtaWMtY29tcG9uZW50XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCdkeW5hbWljLWNvbXBvbmVudCcpIGNvbXBvbmVudCE6IFR5cGU8YW55PjtcbiAgICBASW5wdXQoKSBpbnB1dHM6IGFueTtcblxuICAgIGNvbXBvbmVudFJlZiE6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBhc3NlcnROb3ROdWxsT3JVbmRlZmluZWQodGhpcy5jb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBjb21wb25lbnRDaGFuZ2VzOiBSZWNvcmQ8c3RyaW5nLCBTaW1wbGVDaGFuZ2U+O1xuICAgICAgICBjb25zdCBzaG91bGRDcmVhdGVOZXdDb21wb25lbnQgPSBcbiAgICAgICAgICAgIGNoYW5nZXNbJ2NvbXBvbmVudCddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ2NvbXBvbmVudCddLmN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIGNoYW5nZXNbJ2luamVjdG9yJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snaW5qZWN0b3InXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgaWYgKHNob3VsZENyZWF0ZU5ld0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q29tcG9uZW50KCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuXG4gICAgICAgICAgICBjb21wb25lbnRDaGFuZ2VzID0gdGhpcy5tYWtlQ29tcG9uZW50Q2hhbmdlcyhjaGFuZ2VzWydpbnB1dHMnXSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRDaGFuZ2VzID8/PSB0aGlzLm1ha2VDb21wb25lbnRDaGFuZ2VzKGNoYW5nZXNbJ2lucHV0cyddLCBmYWxzZSk7XG5cbiAgICAgICAgYXNzZXJ0Tm90TnVsbE9yVW5kZWZpbmVkKHRoaXMuY29tcG9uZW50UmVmKTtcblxuICAgICAgICBpZiAoY2hhbmdlc1snaW5wdXRzJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYmluZElucHV0cyh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSwgdGhpcy5pbnB1dHMgPz8ge30sIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBPbkNoYW5nZXMpLm5nT25DaGFuZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5uZ09uQ2hhbmdlcyhjb21wb25lbnRDaGFuZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZUNvbXBvbmVudENoYW5nZXMoaW5wdXRzQ2hhbmdlOiBTaW1wbGVDaGFuZ2UsIGZpcnN0Q2hhbmdlOiBib29sZWFuKTogUmVjb3JkPHN0cmluZywgU2ltcGxlQ2hhbmdlPiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzSW5wdXRzID0gaW5wdXRzQ2hhbmdlPy5wcmV2aW91c1ZhbHVlID8/IHt9O1xuICAgICAgICBjb25zdCBjdXJyZW50SW5wdXRzID0gaW5wdXRzQ2hhbmdlPy5jdXJyZW50VmFsdWUgPz8ge307XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGN1cnJlbnRJbnB1dHMpLnJlZHVjZSgoYWNjLCBpbnB1dE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gY3VycmVudElucHV0c1tpbnB1dE5hbWVdO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJbnB1dFZhbHVlID0gcHJldmlvdXNJbnB1dHNbaW5wdXROYW1lXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5wdXRWYWx1ZSAhPT0gcHJldmlvdXNJbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYWNjW2lucHV0TmFtZV0gPSBuZXcgU2ltcGxlQ2hhbmdlKGZpcnN0Q2hhbmdlID8gdW5kZWZpbmVkIDogcHJldmlvdXNJbnB1dFZhbHVlLCBjdXJyZW50SW5wdXRWYWx1ZSwgZmlyc3RDaGFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgU2ltcGxlQ2hhbmdlPik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3lDb21wb25lbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmPy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiaW5kSW5wdXRzKGNvbXBvbmVudElucHV0czogQ29tcG9uZW50SW5wdXRzLCB1c2VySW5wdXRzOiBVc2VySW5wdXRzLCBjb21wb25lbnRJbnN0YW5jZTogYW55KTogdm9pZCB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudElucHV0cylcbiAgICAgICAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdXNlcklucHV0c1trZXldO1xuICAgICAgICAgICAgY29tcG9uZW50SW5zdGFuY2Vba2V5XSA9IGlucHV0VmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0Tm90TnVsbE9yVW5kZWZpbmVkPFQ+KHZhbHVlOiBUKTogYXNzZXJ0cyB2YWx1ZSBpcyBOb25OdWxsYWJsZTxUPiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGJlIHVuZGVmaW5lZCBvciBudWxsXCIpO1xuICAgIH1cbn0iXX0=