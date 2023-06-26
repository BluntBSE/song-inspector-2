import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../query.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { songFeatures, artist, track, tracks, } from '../../interfaces';

//TODO these interfaces probably need to go elsewhere


@Component({
  selector: 'app-song-chooser',
  templateUrl: './song-chooser.component.html',
  styleUrls: ['./song-chooser.component.scss']
})
export class SongChooserComponent {

  constructor(
    private queryService: QueryService,
    private http: HttpClient
  ) { }

  @Output()artistToSearch: string = "Enter an artist";
  @Input()songNameToSearch: string = "Enter a song name";
  @Input()activeArtist: string = "No artist selected";
  @Input()activeSong: string = "No song selected";

  @Input()activeSongFeatures: songFeatures = {
    danceability: 0,
    energy: 0,
    key: 0,
    loudness: 0,
    mode: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0,
    tempo: 0,
    type: "audio_features",
    id: "",
    uri: "",

  }

  @Input()targetSongFeatures: songFeatures = {
    danceability: 0,
    energy: 0,
    key: 0,
    loudness: 0,
    mode: 0,
    speechiness: 0,
    acousticness: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0,
    tempo: 0,
    type: "audio_features",
    id: "",
    uri: "",
  }


  //Function to fetch data from the Inputs on Artist and Song Name
  //and pass it to the parent component




  async chooseSong() {
    //Figure out how to flatten this.
    console.log("chooseSong() called");
    this.http.get(this.queryService.myvar._server + '/get_song_by_name_and_artist/'
      + "?name=" + this.songNameToSearch
      + "&artist=" + this.artistToSearch
      //+ "market=US" TODO: Consider adding market later.
    ).subscribe(data => {
      //Flatten here, if you choose to flatten.
      const trackdata = data as { tracks: tracks };
      console.log(trackdata.tracks.items[0]);
      console.log(trackdata.tracks.items[0].name);
      this.activeArtist = trackdata.tracks.items[0].artists[0].name;
      this.activeSong = trackdata.tracks.items[0].name;

      this.http.get(this.queryService.myvar._server + '/get_song_attributes/?id=' + trackdata.tracks.items[0].id).subscribe(data => {
        console.log(data)

      });



    });

  }

  updateArtist() {
    console.log("updateArtist() called");

  }

  updateSongName() {
    console.log("updateSongName() called");
  }



  ngOnInit(): void {
  }

}
