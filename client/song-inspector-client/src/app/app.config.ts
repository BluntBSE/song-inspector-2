import { Inject, InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");



export interface IAppConfig {
    _server: string;
}

export const AppConfig: IAppConfig = {    
    _server: "http://localhost:8081"    
};