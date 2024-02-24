import { ComponentFactory, ComponentRef, Directive, Input, OnChanges, OnDestroy, SimpleChange, SimpleChanges, Type, ViewContainerRef } from "@angular/core";


type UserOutputs = Record<string, (event: any) => void>;
type UserInputs = Record<string, any>;
type ComponentInputs = ComponentFactory<any>['inputs'];
type ComponentOutputs = ComponentFactory<any>['outputs'];


@Directive({
    selector: '[dynamic-component]'
})

export class DynamicComponentDirective implements OnChanges, OnDestroy {

    @Input('dynamic-component') component!: Type<any>;
    @Input() inputs: any;

    componentRef!: ComponentRef<any>;

    constructor(private vcr: ViewContainerRef) {}

    ngOnDestroy(): void {
        this.destroyComponent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        assertNotNullOrUndefined(this.component);

        let componentChanges: Record<string, SimpleChange>;
        const shouldCreateNewComponent = 
            changes['component'].previousValue !== changes['component'].currentValue
            ||
            changes['injector'].previousValue !== changes['injector'].currentValue;

        if (shouldCreateNewComponent) {
            this.destroyComponent();
            this.createComponent();

            componentChanges = this.makeComponentChanges(changes['inputs'], true);
        }

        componentChanges ??= this.makeComponentChanges(changes['inputs'], false);

        assertNotNullOrUndefined(this.componentRef);

        if (changes['inputs']) {
            this.bindInputs(this.componentRef.instance, this.inputs ?? {}, this.componentRef.instance);
        }

        if((this.componentRef.instance as OnChanges).ngOnChanges) {
            this.componentRef.instance.ngOnChanges(componentChanges);
        }
    }

    private makeComponentChanges(inputsChange: SimpleChange, firstChange: boolean): Record<string, SimpleChange> {
        const previousInputs = inputsChange?.previousValue ?? {};
        const currentInputs = inputsChange?.currentValue ?? {};

        return Object.keys(currentInputs).reduce((acc, inputName) => {
            const currentInputValue = currentInputs[inputName];
            const previousInputValue = previousInputs[inputName];
            if (currentInputValue !== previousInputValue) {
                acc[inputName] = new SimpleChange(firstChange ? undefined : previousInputValue, currentInputValue, firstChange);
            }
            return acc;
        }, {} as Record<string, SimpleChange>);
    }

    private createComponent(): void {
        this.componentRef = this.vcr.createComponent(this.component);
    }

    private destroyComponent(): void {
        this.componentRef?.destroy();
        this.vcr.clear();
    }

    private bindInputs(componentInputs: ComponentInputs, userInputs: UserInputs, componentInstance: any): void {
        Object.keys(componentInputs)
        .forEach((key: string) => {
            const inputValue = userInputs[key];
            componentInstance[key] = inputValue;
        });
    }
}

function assertNotNullOrUndefined<T>(value: T): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw new Error("Cannot be undefined or null");
    }
}