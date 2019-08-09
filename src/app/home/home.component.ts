import { Component, OnInit } from '@angular/core';
import { SpotifyConnectionService } from '../spotify-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newReleases: any[] = [];

  public loading = true;

  constructor(private spotifyConnectionService: SpotifyConnectionService) {
    console.log(`${HomeComponent.name}::ctor`);
  }

  ngOnInit() {
    this.loadNewReleases();
  }

  private loadNewReleases() {
    console.log(`${HomeComponent.name}::loadNewReleases`);

    this.spotifyConnectionService.getNewReleases()
      .subscribe((response) => {
        console.log(response);
        this.newReleases = response;
        this.loading = false;
      });
  }
}
