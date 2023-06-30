import { Inject, InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");



export interface IAppConfig {
    _server: string;
    _client_id: string;
    _client_secret: string;
}

export const AppConfig: IAppConfig = {    
    _server: "http://localhost:8081",
    _client_id: "67f7152ee71e474a912d1d11e106895d" ,
    //Get this out of the clear
    _client_secret: "a0b0c0d0e0f0g0h0i0j0k0l0m0n0o0p0"
};