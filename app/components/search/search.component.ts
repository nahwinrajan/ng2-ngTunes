import { Component }        from '@angular/core';
import { SpotifyService }   from '../../services/spotify.service';
import { Artist }           from '../../../Artist'

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})

export class SearchComponent {
  searchKey:string;
  searchRes:Artist[];

  constructor(private _spotifyService:SpotifyService) {

  }

  searchByArtist(){
    this._spotifyService.searchMusic(this.searchKey).subscribe(res => {
      this.searchRes = res.artists.items;
    })
  }
}
