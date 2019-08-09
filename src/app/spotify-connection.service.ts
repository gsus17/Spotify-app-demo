import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyConnectionService {

  // tslint:disable-next-line:max-line-length
  private customToken = 'BQC2pIV-Moptxl1iAgmg2mS2uwTJWbc3UrZ5Tv9DXYQxU6WQP5oHfRaIzh8pKId7_qlw7jUB8tQviuik27P0I3rY6vQmpKBhaYq7b4aK00SUx5hWBfTu_EFk7Eahh_lb8RvbM1VWICH17w';

  constructor(private http: HttpClient) {
    console.log(`${SpotifyConnectionService.name}::ctor`);
  }

  public getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const HEADERS = new HttpHeaders({
      Authorization: `Bearer ${this.customToken}`
    });

    return this.http.get(url, { headers: HEADERS });
  }

  public getNewReleases() {
    console.log(`${SpotifyConnectionService.name}::getNewReleases`);

    return this.getQuery('browse/new-releases')
      .pipe(
        map((data: any) => data.albums.items)
      );
  }

  public getArtists(artist: string) {
    console.log(`${SpotifyConnectionService.name}::getArtists`);
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`)
      .pipe(
        map((data: any) => data.artists.items)
      );
  }

  public getTopTracks(artistId: string) {
    console.log(`${SpotifyConnectionService.name}::getArtists`);
    return this.getQuery(`artists/${artistId}/top-tracks?country=es`)
    .pipe(
      map((data: any) => data.tracks)
    );
  }

  public getArtistById(artistId: string) {
    console.log(`${SpotifyConnectionService.name}::getArtistById`);
    return this.getQuery(`artists/${artistId}`);
  }
}
