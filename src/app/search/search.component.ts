import { Component, OnInit } from '@angular/core';
import { SpotifyConnectionService } from '../spotify-connection.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];

  public loading = true;

  constructor(private spotifyConnectionService: SpotifyConnectionService) { }

  ngOnInit() {
  }

  public search(searchText: string) {
    console.log(searchText);
    this.spotifyConnectionService.getArtists(searchText)
      .subscribe((response: any) => {
        console.log(response);
        this.artistas = response;
        this.loading = false;
      });
  }

}
