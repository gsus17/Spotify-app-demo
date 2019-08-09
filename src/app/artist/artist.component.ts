import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyConnectionService } from '../spotify-connection.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artista;
  public topTracks: any[] = [];

  public loading = true;

  public displayedColumns: string[] = ['foto', 'album', 'cancion', 'vista'];

  constructor(
    private router: ActivatedRoute,
    private spotifyConnectionService: SpotifyConnectionService) {

    this.router.params
      .subscribe((params: any) => {

        this.spotifyConnectionService.getArtistById(params.id)
          .subscribe((response) => {
            console.log(response);
            this.artista = response;
            this.loading = false;
          });

        this.spotifyConnectionService.getTopTracks(params.id)
          .subscribe((response) => {
            console.log(response);
            this.topTracks = response;
            this.loading = false;
          });
      });
  }

  ngOnInit() {
  }

}
