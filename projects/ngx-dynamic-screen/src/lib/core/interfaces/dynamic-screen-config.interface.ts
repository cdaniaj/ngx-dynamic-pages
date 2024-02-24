import { IJsonParameterize } from "./json-parameterize.interface";

export interface IDynamicScreenConfig {
    jsonParameterize: IJsonParameterize[];
    storeComponents: any[];
}