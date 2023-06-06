import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongMetaComponent } from './song-meta/song-meta.component';
import { SongAttributesComponent } from './song-attributes/song-attributes.component';
import { SongInputComponent } from './song-input/song-input.component';
import { RecommendationCtaComponent } from './recommendation-cta/recommendation-cta.component';
import { RecommendationOutputComponent } from './recommendation-output/recommendation-output.component';
import { GenreJumperComponent } from './genre-jumper/genre-jumper.component';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { TitleComponent } from './title-component/title-component.component';
import { SongListComponent } from './song-list/song-list.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    SongMetaComponent,
    SongAttributesComponent,
    SongInputComponent,
    RecommendationCtaComponent,
    RecommendationOutputComponent,
    GenreJumperComponent,
    HomeWrapperComponent,
    TitleComponent,
    SongListComponent,
    HomeComponent
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    SongMetaComponent,
    SongAttributesComponent,
    SongInputComponent,
    RecommendationCtaComponent,
    RecommendationOutputComponent,
    GenreJumperComponent,
    HomeWrapperComponent,
    TitleComponent,
    SongListComponent,
    HomeComponent
  ]
})
export class HomeModule { }
