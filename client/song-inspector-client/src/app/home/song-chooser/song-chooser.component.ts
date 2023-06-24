import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../query.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface track{
  album: Object,
  ​​​​
  artists: Array<Object>,
​​​​
  disc_number: BigInteger,
​​​​
  duration_ms: BigInteger,
​​​​
  explicit: true,
​​​​
  external_ids: Object,
​​​​
  external_urls: Object,
​​​​
  href: string,
​​​​
  id: string,
​​​​
  is_local: Boolean
​​​​
  is_playable: Boolean,
​​​​
  name: String,
​​​​
  popularity: BigInteger,
​​​​
  preview_url: String,
​​​​
  track_number: BigInteger,
​​​​
  type: "track"
​​​​
  uri: String,
}

interface tracks{
  href: string,
  items: Array<track>,
  limit: BigInteger,
  next: string,
  offset: BigInteger,
  previous: string,
  total: BigInteger,
}





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

  artistToSearch: string = "Enter an artist";
  songNameToSearch: string = "Enter a song name";

  //Function to fetch data from the Inputs on Artist and Song Name
  //and pass it to the parent component




  async chooseSong(){
    //Figure out how to flatten this.
    console.log("chooseSong() called");
    this.http.get(this.queryService.myvar._server + '/get_song_by_name_and_artist/' 
    + "?name=" + this.songNameToSearch 
    + "&artist=" + this.artistToSearch
    //+ "market=US" TODO: Consider adding market later.
    ).subscribe(data => {
      //Flatten here, if you choose to flatten.
      const trackdata = data as { tracks: tracks };
      // console.log(trackdata);
      console.log(trackdata.tracks.items[0].name);

      this.http.get(this.queryService.myvar._server + '/get_song_attributes/?id=' + trackdata.tracks.items[0].id).subscribe(data => {
        console.log(data)
      });

      

    });

  }

  updateArtist(){
    console.log("updateArtist() called");

  }

  updateSongName(){
    console.log("updateSongName() called");
  }



  ngOnInit(): void {
  }

}
