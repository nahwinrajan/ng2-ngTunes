import { Component }        from '@angular/core';
import { SpotifyService }   from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})

export class SearchComponent {
  searchKey:string;

  constructor(private _spotifyService:SpotifyService) {

  }

  searchByArtist(){
    this._spotifyService.searchMusic(this.searchKey).subscribe(res => {
      console.log(res);
    })
  }
}
