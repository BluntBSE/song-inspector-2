import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongMetaComponent } from './song-meta/song-meta.component';
import { SongAttributesComponent } from './song-attributes/song-attributes.component';
import { RecommendationCtaComponent } from './recommendation-cta/recommendation-cta.component';
import { RecommendationOutputComponent } from './recommendation-output/recommendation-output.component';
import { GenreJumperComponent } from './genre-jumper/genre-jumper.component';
import { TitleComponent } from './title-component/title-component.component';
import { SongListComponent } from './song-list/song-list.component';
import { HomeComponent } from './home.component';
import { SongChooserComponent } from './song-chooser/song-chooser.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SongMetaComponent,
    SongAttributesComponent,
    RecommendationCtaComponent,
    RecommendationOutputComponent,
    GenreJumperComponent,
    TitleComponent,
    SongListComponent,
    SongChooserComponent,

  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    SongMetaComponent,
    SongAttributesComponent,
    RecommendationCtaComponent,
    RecommendationOutputComponent,
    GenreJumperComponent,
    TitleComponent,
    SongListComponent,

  ]
})

export class HomeModule {

  constructor (){


    

  }
 }
