import { IJsonParameterize } from "./json-parameterize.interface";

export interface IDynamicPagesConfig {
    jsonParameterize: IJsonParameterize[];
    storeComponents: any[];
}