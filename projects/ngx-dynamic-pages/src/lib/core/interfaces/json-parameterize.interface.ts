export interface IJsonParameterize {
    route: string;
    components: Array<IComponent>;
}

export interface IComponent {
    componentName: string;
    inputs: any;
}