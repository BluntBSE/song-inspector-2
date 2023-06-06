import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongMetaComponent } from './home/song-meta/song-meta.component';
import { SongAttributesComponent } from './home/song-attributes/song-attributes.component';
import { SongInputComponent } from './home/song-input/song-input.component';
import { RecommendationCtaComponent } from './home/recommendation-cta/recommendation-cta.component';
import { RecommendationOutputComponent } from './home/recommendation-output/recommendation-output.component';
import { NavComponent } from './home/nav/nav.component';
import { GenreJumperComponent } from './home/genre-jumper/genre-jumper.component';
import { HomeWrapperComponent } from './home/home-wrapper/home-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    SongMetaComponent,
    SongAttributesComponent,
    SongInputComponent,
    RecommendationCtaComponent,
    RecommendationOutputComponent,
    NavComponent,
    GenreJumperComponent,
    HomeWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
