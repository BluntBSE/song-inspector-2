import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../query.service';
import { HttpClient } from '@angular/common/http';
import { songFeatures, artist, track, tracks } from '../interfaces';
import { EventEmitter, Input } from '@angular/core';
import { LocalService } from '../localservice.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles:[`
  :host{
    display:grid;
  };
  `,]
})



export class HomeComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private queryService: QueryService,
    private localService: LocalService,
  ){


    console.log("HomeComponent constructor called")
    console.log("queryService: " + queryService);
    console.log("queryService.mystr: " + queryService.myvar._client_id);
 
  }


  // @Input()()artistToSearch: string = "Enter an artistxxx";
  //@Output()()songNameToSearch: string = "Enter a song name";
  // @Output()()activeArtist: string = "No artist selected";
  // @Output()()activeSong: string = "No song selected";

  // @Output()()activeSongFeatures: songFeatures = {
  //   danceability: 0,
  //   energy: 0,
  //   key: 0,
  //   loudness: 0,
  //   mode: 0,
  //   speechiness: 0,
  //   acousticness: 0,
  //   instrumentalness: 0,
  //   liveness: 0,
  //   valence: 0,
  //   tempo: 0,
  //   type: "audio_features",
  //   id: "",
  //   uri: "",

  // }

  // @Output()()targetSongFeatures: songFeatures = {
  //   danceability: 0,
  //   energy: 0,
  //   key: 0,
  //   loudness: 0,
  //   mode: 0,
  //   speechiness: 0,
  //   acousticness: 0,
  //   instrumentalness: 0,
  //   liveness: 0,
  //   valence: 0,
  //   tempo: 0,
  //   type: "audio_features",
  //   id: "",
  //   uri: "",
  // }

  myfunction(){
    console.log("myfunction called");
  }

  Authorize(){
    console.log("Authorize called");
    console.log(this.queryService.myvar)
    const authstring =  'https://accounts.spotify.com/authorize/?client_id='
    + this.queryService.myvar._client_id 
    + '&response_type=code&redirect_uri=http://localhost:8080/auth';
    window.open(authstring);
  }

  displayUser(){
    this.http.get('https://api.spotify.com/v1/me').subscribe(data => {
      console.log(data)
    });
  }

  readData(){
    console.log(this.localService.getData('randomkey'))
  }



  title = 'home-component-title';
  some_str = this.queryService.mystr;
  @Input() randomvar = "xxxx";
  //Next up, passing data to child components.


}
