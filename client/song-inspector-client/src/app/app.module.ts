import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data/data.component'; //How do I avoid this? I already have Home Module....
//Alternative: do I really need to import them anyway?


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
   // AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
