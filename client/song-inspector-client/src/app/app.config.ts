import { Inject, InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");



export interface IAppConfig {
    _server: string;
    _client_id: string;
}

export const AppConfig: IAppConfig = {    
    _server: "http://localhost:8081",
    _client_id: "67f7152ee71e474a912d1d11e106895d" 
};