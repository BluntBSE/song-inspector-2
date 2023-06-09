import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data/data.component'; 
import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { APP_CONFIG, AppConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { QueryService } from './query.service';
import { Injectable, Inject } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import {CookieService} from 'ngx-cookie-service';






const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, },
  {path: '', component: HomeComponent, },
  {path: 'data', component: DataComponent, },
  {path: 'authorizex', redirectTo: 'spotify.com'},
  {path: 'auth', component: AuthComponent,}

];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    NavModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig },],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(

  ){
 


    }
  
  
 }
