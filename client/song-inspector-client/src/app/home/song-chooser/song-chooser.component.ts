import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../query.service';

@Component({
  selector: 'app-song-chooser',
  templateUrl: './song-chooser.component.html',
  styleUrls: ['./song-chooser.component.scss']
})
export class SongChooserComponent {

  constructor(
    private queryService: QueryService
  ) { }

  artistToSearch: string = "Enter an artist";
  songNameToSearch: string = "Enter a song name";

  //Function to fetch data from the Inputs on Artist and Song Name
  //and pass it to the parent component
  fetchSongData(){
    console.log("fetchSongData() called");
    console.log("artistToSearch: " + this.artistToSearch);
    console.log("songNameToSearch: " + this.songNameToSearch);
    console.log("queryService: " + this.queryService.myvar._server);
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
