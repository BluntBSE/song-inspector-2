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



const appRoutes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'data', component: DataComponent, },
];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    NavModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
